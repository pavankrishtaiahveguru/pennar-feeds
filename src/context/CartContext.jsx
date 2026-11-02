"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { toast } from "sonner";
import { getProductById } from "@/lib/products";

const STORAGE_KEY = "pennar-feeds-cart";
const EMPTY_CART = [];
const SERVER_SNAPSHOT = { cart: EMPTY_CART, isReady: false };
const CartContext = createContext(null);
const listeners = new Set();
let cachedSerializedCart;
let cachedCart = EMPTY_CART;
let cachedSnapshot = SERVER_SNAPSHOT;
let storageUnavailable = false;

function parseCart(serializedCart) {
  if (!serializedCart) return EMPTY_CART;

  const parsedCart = JSON.parse(serializedCart);
  if (!Array.isArray(parsedCart)) return EMPTY_CART;

  const quantities = new Map();
  for (const item of parsedCart) {
    const productId = Number(item?.productId);
    if (
      !getProductById(productId) ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1
    ) {
      continue;
    }

    quantities.set(productId, (quantities.get(productId) ?? 0) + item.quantity);
  }

  return Array.from(quantities, ([productId, quantity]) => ({
    productId,
    quantity,
  }));
}

function getCartSnapshot() {
  if (typeof window === "undefined") return SERVER_SNAPSHOT;
  if (storageUnavailable) return cachedSnapshot;

  try {
    const serializedCart = window.localStorage.getItem(STORAGE_KEY);
    if (serializedCart !== cachedSerializedCart) {
      cachedSerializedCart = serializedCart;
      try {
        cachedCart = parseCart(serializedCart);
      } catch (error) {
        console.error("Unable to parse the saved Pennar Feeds cart.", error);
        cachedCart = EMPTY_CART;
      }
      cachedSnapshot = { cart: cachedCart, isReady: true };
    }
  } catch (error) {
    console.error("Unable to read the Pennar Feeds cart from storage.", error);
    storageUnavailable = true;
    cachedSnapshot = { cart: cachedCart, isReady: true };
  }

  return cachedSnapshot;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function handleStorageChange(event) {
  if (event.key !== STORAGE_KEY && event.key !== null) return;

  storageUnavailable = false;
  cachedSerializedCart = undefined;
  getCartSnapshot();
  notifyListeners();
}

function subscribe(listener) {
  listeners.add(listener);
  if (listeners.size === 1 && typeof window !== "undefined") {
    window.addEventListener("storage", handleStorageChange);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorageChange);
    }
  };
}

function updateCart(update) {
  const nextCart = update(getCartSnapshot().cart);
  const serializedCart = JSON.stringify(nextCart);
  cachedCart = nextCart;
  cachedSerializedCart = serializedCart;
  cachedSnapshot = { cart: cachedCart, isReady: true };

  try {
    window.localStorage.setItem(STORAGE_KEY, serializedCart);
    storageUnavailable = false;
  } catch (error) {
    console.error("Unable to save the Pennar Feeds cart to storage.", error);
    storageUnavailable = true;
    toast.error("Your cart changed, but could not be saved on this device.");
  }

  notifyListeners();
}

export function CartProvider({ children }) {
  const { cart, isReady } = useSyncExternalStore(
    subscribe,
    getCartSnapshot,
    getServerSnapshot,
  );

  const addToCart = useCallback((productId) => {
    const product = getProductById(productId);
    if (!product) {
      toast.error("This product is no longer available.");
      return;
    }

    updateCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.productId === product.id,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { productId: product.id, quantity: 1 }];
    });

    toast.success(`${product.name} (${product.protein} Protein) added to cart`);
  }, []);

  const setItemQuantity = useCallback((productId, quantity) => {
    if (!Number.isInteger(quantity)) {
      toast.error("Please choose a valid quantity.");
      return;
    }

    updateCart((currentCart) =>
      currentCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  }, []);

  const removeFromCart = useCallback((productId) => {
    updateCart((currentCart) =>
      currentCart.filter((item) => item.productId !== productId),
    );
  }, []);

  const items = useMemo(
    () =>
      cart.map((item) => ({
        ...item,
        product: getProductById(item.productId),
      })),
    [cart],
  );
  const itemCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      isReady,
      addToCart,
      setItemQuantity,
      removeFromCart,
    }),
    [items, itemCount, isReady, addToCart, setItemQuantity, removeFromCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }
  return context;
}
