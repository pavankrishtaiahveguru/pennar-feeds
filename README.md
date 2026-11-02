# Pennar Feeds

The official Pennar Feeds website showcases the company's premium floating fish feed, product specifications, quality information, and contact options. Customers can build a shopping cart and prepare an order booking to send through WhatsApp.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-149eca?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?logo=javascript&logoColor=222)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Contents

- [About the Project](#about-the-project)
- [Live Website](#live-website)
- [Features](#features)
- [Products](#products)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Product Ordering Workflow](#product-ordering-workflow)
- [Contact Information](#contact-information)
- [Future Improvements](#future-improvements)
- [License](#license)

## About the Project

Pennar Feeds is a fish-feed manufacturing brand specializing in premium floating fish feed. This website presents the company's products and specifications alongside information about the company and its quality focus. Customers can browse product details, manage a cart, and prepare a booking message for the Pennar Feeds WhatsApp number.

The application uses the Next.js App Router and is built as a responsive website for desktop and mobile browsers.

## Live Website

> **Live site URL:** Not configured in this repository. Replace this placeholder with the public URL when the website is deployed.

## Features

- Responsive homepage with a brand introduction, product showcase, and calls to action.
- Company information and quality pages.
- Product listing and individual product detail pages for the two feed formulations.
- Product specifications, including protein, fat, pellet size, and pack weight.
- **View Product** navigation and **Add to Cart** actions.
- Shared cart state with browser `localStorage` persistence.
- Duplicate additions increase the existing product quantity; the Navbar displays the total number of bags.
- Cart quantity controls, item removal, product count, and bag count.
- Customer details form with required-field checks and mobile number validation.
- Order review containing customer details, product specifications, quantities, and totals.
- WhatsApp order booking message prepared for review and sending by the customer. Opening WhatsApp does not submit or confirm the booking, and the cart is not automatically cleared.
- Contact form that opens a WhatsApp enquiry message.
- Sonner toast notifications and Framer Motion UI animations.
- Responsive navigation, product pages, and shared footer.

The website does not currently include online payments, product pricing, an order-management backend, user accounts, or a database.

## Products

Both products are floating fish feed supplied in 40kg PP bags. Packaging colors below describe the product images included in this repository.

| Product | Protein | Fat | Pellet Size | Packaging | Pictured Packaging Colors |
| --- | ---: | ---: | ---: | --- | --- |
| Pennar Premium Floating Fish Feed — 24% formulation | 24% | 4% | 4mm | 40kg PP bag | Blue, red, and white |
| Pennar Premium Floating Fish Feed — 28% formulation | 28% | 5% | 4mm | 40kg PP bag | Orange, green, and white |

Product images are stored at `public/images/products/product-1.png` and `public/images/products/product-2.png`. Prices are not listed or calculated by the website.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) App Router | Page routing, layouts, metadata, and static product detail generation |
| [React](https://react.dev/) | UI components, forms, and cart state subscriptions |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first responsive styling |
| [Framer Motion](https://www.framer.com/motion/) | Page, section, and interaction animations |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [React Icons](https://react-icons.github.io/react-icons/) | Brand icons, including WhatsApp |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications |
| npm | Package installation and project scripts |

The project is written in JavaScript and uses the Geist and Geist Mono fonts through `next/font`.

## Project Structure

```text
.
├── public/
│   ├── images/
│   │   ├── about-fish-farming.png
│   │   ├── about.png
│   │   ├── pennar-hero.png
│   │   ├── quality-fish-farming.png
│   │   └── products/
│   │       ├── product-1.png
│   │       └── product-2.png
│   ├── logo/
│   │   └── logo.png
│   └── staffarc-logo.avif
├── src/
│   ├── app/
│   │   ├── about/page.jsx
│   │   ├── cart/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── products/
│   │   │   ├── [id]/page.jsx
│   │   │   └── page.jsx
│   │   ├── quality/page.jsx
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── CTA.jsx
│   │   │   └── DevelopedByStaffArc.jsx
│   │   ├── home/
│   │   │   ├── About.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Products.jsx
│   │   ├── layout/
│   │   │   ├── AppProviders.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbr.jsx
│   │   └── products/
│   │       └── ProductDetailActions.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   └── lib/
│       ├── products.js
│       └── whatsapp-order.js
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
└── package.json
```

## Installation and Setup

The repository is configured for npm and includes `package-lock.json`; use `npm ci` to install the locked dependencies.

```bash
git clone 
cd pennar-feeds
npm ci
```

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in a browser.

Build and run the production application:

```bash
npm run build
npm run start
```

## Environment Variables

No environment variables are currently referenced by the application. The cart is stored in the browser, and contact and booking messages are composed client-side for WhatsApp.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server; run `npm run build` first |
| `npm run lint` | Run ESLint |

## Product Ordering Workflow

1. Browse products on the homepage or at `/products`.
2. Select **View Product** to open a product detail page, or **Add to Cart** to add a bag. Adding a product already in the cart increases its quantity.
3. Open the cart from the Navbar. Adjust quantities or remove products; the cart is saved in browser `localStorage`.
4. Choose **Book via WhatsApp** and enter a full name, contact number, and delivery address. An additional message is optional.
5. Continue to the order summary and review the customer and product details, including the number of different products and total bags.
6. Choose **Book Now** to open a pre-filled message to Pennar Feeds at `+91 81069 73783` in a new WhatsApp tab.
7. Press **Send** in WhatsApp to submit the booking. Opening WhatsApp alone does not confirm the order. The cart remains intact.

No prices, subtotal, tax, or payment are part of this booking flow.

## Contact Information

**Pennar Feeds**

- **Email:** [Pennarfeeds67@gmail.com](mailto:Pennarfeeds67@gmail.com)
- **Phone:** [+91 81069 73783](tel:+918106973783)
- **Address:** Chakrayagudem, Pedavegi Mandal, Eluru District, Andhra Pradesh - 534452

## Future Improvements

Potential future enhancements, not currently implemented:

- Add automated unit, component, and end-to-end tests for cart and booking flows.
- Connect bookings to an order-management service or internal dashboard.
- Add deployment-specific metadata, monitoring, and a published production URL.

## License

No `LICENSE` file is present in the repository. The project is proprietary; no open-source license is currently specified.
