"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeLink = ({ children, onClick, ...props }) => {
  const pathname = usePathname();
  const shouldScrollAfterNavigation = useRef(false);

  useEffect(() => {
    if (!shouldScrollAfterNavigation.current) {
      return;
    }

    shouldScrollAfterNavigation.current = false;

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    shouldScrollAfterNavigation.current = true;
  };

  return (
    <Link {...props} href="/" scroll={false} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default HomeLink;
