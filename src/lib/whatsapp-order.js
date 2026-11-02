export function createWhatsAppOrderMessage(customer, items, itemCount) {
  const productDetails = items
    .map(
      ({ product, quantity }, index) =>
        `${index + 1}. ${product.name} – ${product.protein} Protein
Fat: ${product.fat}
Pellet Size: ${product.size}
Pack Weight: ${product.weight}
Quantity: ${quantity} ${quantity === 1 ? "Bag" : "Bags"}`,
    )
    .join("\n\n");

  const additionalMessage = customer.additionalMessage.trim()
    ? `\nAdditional Message: ${customer.additionalMessage.trim()}`
    : "";

  return `Pennar Feeds – New Order Booking

Hello Pennar Feeds Team,

I would like to book the following products.

CUSTOMER DETAILS

Name: ${customer.fullName.trim()}
Contact: ${customer.contactNumber.trim()}
Delivery Address: ${customer.deliveryAddress.trim()}${additionalMessage}

ORDER DETAILS

${productDetails}

TOTAL DIFFERENT PRODUCTS: ${items.length}
TOTAL BAGS: ${itemCount}

Please confirm my order and share the next steps.

Thank you!
${customer.fullName.trim()}`;
}
