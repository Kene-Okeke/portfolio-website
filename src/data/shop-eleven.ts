export type CodeSnippet = {
  id: string;
  filename: string;
  language: string;
  code: string;
};

export const shopElevenMeta = {
  name: "Shop Eleven",
  tagline: "Full-Stack E-Commerce Platform",
  description:
    "A full-stack e-commerce platform built with Laravel — combining a customer-facing storefront with an authenticated admin dashboard for store management. Designed around a clean shopping experience, responsive interfaces, product administration, and a lightweight WhatsApp checkout workflow.",
  role: "Full-Stack Developer",
  stack: "Laravel · PHP · MySQL · Blade · JavaScript",
  status: "Live",
  category: "E-Commerce",
  liveUrl: "https://shopeleven.store",
  githubUrl: "https://github.com/Kene-Okeke/shop-eleven-store",
};

export const shopElevenImages = {
  hero: {
    src: "/projects/shop-eleven/shop-eleven-hero.png",
    alt: "Shop Eleven desktop storefront hero screenshot",
    width: 786,
    height: 1024,
  },
  desktop: {
    src: "/projects/shop-eleven/shop-eleven-desktop.png",
    alt: "Shop Eleven desktop home experience",
    width: 786,
    height: 1024,
  },
  mobileHome: {
    src: "/projects/shop-eleven/shop-eleven-mobile-home.png",
    alt: "Shop Eleven mobile home page",
    width: 506,
    height: 1024,
  },
  mobileShop: {
    src: "/projects/shop-eleven/shop-eleven-mobile-shop.png",
    alt: "Shop Eleven mobile shop page",
    width: 501,
    height: 1024,
  },
  shop: {
    src: "/projects/shop-eleven/shop-eleven-shop.png",
    alt: "Shop Eleven product discovery interface",
    width: 1024,
    height: 580,
  },
  cloudinary: {
    src: "/projects/shop-eleven/shop-eleven-cloudinary.png",
    alt: "Shop Eleven Cloudinary media management",
    width: 1024,
    height: 555,
  },
  database: {
    src: "/projects/shop-eleven/shop-eleven-database.png",
    alt: "Shop Eleven database schema screenshot",
    width: 1024,
    height: 513,
  },
  adminDashboard: {
    src: "/projects/shop-eleven/shop-eleven-admin-dashboard.png",
    alt: "Shop Eleven admin dashboard overview",
    width: 1024,
    height: 600,
  },
  adminAuth: {
    src: "/projects/shop-eleven/shop-eleven-admin-auth.png",
    alt: "Shop Eleven admin authentication screen",
    width: 1024,
    height: 560,
  },
  adminProducts: {
    src: "/projects/shop-eleven/shop-eleven-admin-products.png",
    alt: "Shop Eleven admin product management interface",
    width: 1024,
    height: 874,
  },
};

export const shopElevenSnapshot = [
  {
    number: "01",
    title: "Product Catalog",
    description: "Browse and display products dynamically.",
  },
  {
    number: "02",
    title: "Cart System",
    description:
      "Client-side cart in JavaScript with localStorage for quantity updates and item removal.",
  },
  {
    number: "03",
    title: "Cloudinary",
    description: "Product imagery managed through Cloudinary.",
  },
  {
    number: "04",
    title: "WhatsApp Checkout",
    description: "Orders are transferred into a WhatsApp-based checkout flow.",
  },
  {
    number: "05",
    title: "Admin Panel",
    description:
      "Store management and product administration through an authenticated dashboard.",
  },
];

export const shopElevenHighlights = [
  {
    title: "Dynamic Product Management",
    description:
      "Products are stored in MySQL and rendered dynamically through Laravel and Blade templates.",
  },
  {
    title: "Responsive Storefront",
    description:
      "The shop interface adapts across desktop and mobile screen sizes without sacrificing usability.",
  },
  {
    title: "Cart Functionality",
    description:
      "Client-side cart logic in JavaScript uses localStorage as the source of truth, supporting quantity updates, item removal, and checkout handoff via WhatsApp.",
  },
  {
    title: "Cloudinary Media Integration",
    description:
      "Product images are managed through Cloudinary rather than relying entirely on local storage.",
  },
  {
    title: "WhatsApp Checkout",
    description:
      "Order details are compiled and handed off to WhatsApp for the final purchase conversation.",
  },
  {
    title: "Laravel / MySQL Backend",
    description:
      "Application logic, routing, and persistence are handled through Laravel with a MySQL database.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Authenticated admin area for managing store operations, products, and categories.",
  },
];

export const shopElevenStackLayers = [
  {
    label: "Frontend",
    items: ["Blade", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Laravel", "PHP"],
  },
  {
    label: "Database",
    items: ["MySQL"],
  },
  {
    label: "Media",
    items: ["Cloudinary"],
  },
  {
    label: "Order Flow",
    items: ["WhatsApp"],
  },
];

export const shopElevenCheckoutFlow = [
  "Cart",
  "Review Order",
  "WhatsApp",
  "Order Confirmation",
];

export const shopElevenDatabaseTables = [
  {
    name: "categories",
    description: "Product category groupings for catalog organisation.",
  },
  {
    name: "users",
    description: "Store administrators and authenticated user accounts.",
  },
  {
    name: "products",
    description: "Product records with pricing, stock, and category references.",
  },
  {
    name: "orders",
    description: "Customer order headers and checkout metadata.",
  },
  {
    name: "order_items",
    description: "Line items linked to individual orders.",
  },
];

export const shopElevenAdminSections = [
  {
    id: "overview",
    title: "Store Management",
    description:
      "Shop Eleven includes an authenticated admin dashboard for managing day-to-day store operations. Store owners can access product data and maintain catalog content without touching the customer-facing storefront.",
    imageKey: "adminDashboard" as const,
  },
  {
    id: "auth",
    title: "Admin Authentication",
    description:
      "The admin area is protected behind Laravel authentication. Only authorised users can access store management routes, keeping product data separate from the public shopping experience.",
    imageKey: "adminAuth" as const,
  },
  {
    id: "products",
    title: "Product Management",
    description:
      "Administrators can view and edit products — updating names, descriptions, pricing, stock quantities, category assignments, and product imagery through the admin interface.",
    imageKey: "adminProducts" as const,
  },
];

export const shopElevenSnippets = {
  shopPage: {
    filename: "public/js/shop.js",
    language: "javascript",
    code: `document.addEventListener("DOMContentLoaded", () => {
    const categoryFilters = document.querySelectorAll(".category-filter");
    const productList = document.getElementById("product-list");
    console.log("product list:", productList);
    attachCartListeners();
    renderCartBadges();
    load_cart_nav();

    async function loadProducts(value) {
        const response = await fetch(\`/api/categories/\${value}/products\`);

        const products = await response.json();

        renderProducts(products.data, productList);
    }

    const params = new URLSearchParams(window.location.search);

    const categoryid = params.get("category");

    console.log("category_id :", categoryid);

    if (categoryid) {
        productList.innerHTML = \`
        <div class="product-loading">
            <img src="/images/shopelevenlogo.png" alt="Loading...">
        </div>
    \`;
        loadProducts(categoryid);
    }

    categoryFilters.forEach((filter) => {
        filter.addEventListener("click", () => loadProducts(filter.value));
    });

    const searchInputs = document.querySelectorAll(
        "#mobile-search-input, #search-input, .categories-search-box, .product-search-box",
    );

    console.log("search input:", searchInputs);

    searchInputs.forEach((searchInput) => {
        searchInput.addEventListener("input", async function () {
            const query = this.value;

            const response = await fetch(\`/api/products/search?q=\${query}\`);

            const products = await response.json();

            renderProducts(products.data, productList);
        });

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    });
});`,
  },
  cloudinary: {
    filename: "app/Services/CloudinaryService.php",
    language: "PHP",
    code: "[CLOUDINARY INTEGRATION CODE WILL BE INSERTED HERE]",
  },
  cart: {
    filename: "public/js/cart.js",
    language: "javascript",
    code: `// this is where our cart logic lives

import { renderCart } from "./cartRenderer.js";
import { handleCheckout } from "./checkout.js";
import { attachMenuListener } from "./mobileMenu.js";

console.log("NEW CART JS LOADED");
document.addEventListener("DOMContentLoaded", function () {
    const cartTotals = renderCart();

    attachDeleteListeners();

    attachQuantityListeners();

    renderOrderSummary(cartTotals.totalPrice, cartTotals.totalQuantity);

    attachCheckoutListener();
});

function attachDeleteListeners() {
    const cartContainer = document.querySelector("#cart-products");

    if (!cartContainer) {
        return;
    }

    cartContainer.addEventListener("click", function (event) {
        const deleteButton = event.target.closest(".deleteIcon");

        if (!deleteButton) {
            return;
        }

        const product_id = deleteButton.dataset.id;

        let cart = JSON.parse(localStorage.getItem("cart"));

        cart = cart.filter((product) => product.id != product_id);

        localStorage.setItem("cart", JSON.stringify(cart));

        const cartTotals = renderCart();

        renderOrderSummary(cartTotals.totalPrice, cartTotals.totalQuantity);

        attachCheckoutListener();
    });
}
function attachQuantityListeners() {
    const cartContainer = document.querySelector("#cart-products");

    if (!cartContainer) {
        return;
    }

    cartContainer.addEventListener("click", function (event) {
        const clickedElement = event.target;

        const quantityContainer = clickedElement.closest(".quantincreasecont");

        if (!quantityContainer) {
            return;
        }

        const product_id = quantityContainer.dataset.id;

        let cart = JSON.parse(localStorage.getItem("cart"));

        const product = cart.find((item) => item.id == product_id);

        if (!product) {
            return;
        }

        if (clickedElement.classList.contains("add")) {
            product.quantity++;
        }

        if (clickedElement.classList.contains("subtract")) {
            if (product.quantity > 1) {
                product.quantity--;
            }
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        const cartTotals = renderCart();

        renderOrderSummary(cartTotals.totalPrice, cartTotals.totalQuantity);

        attachCheckoutListener();
    });
}
function renderOrderSummary(totalPrice, totalQuantity) {
    const order_summary = document.querySelector(".Order-summary-cont");

    if (!order_summary) {
        return;
    }

    order_summary.innerHTML = \` <h1 
                     style="font-size: 25px; font-weight:400;  padding-bottom:8px; border-bottom-width: 1.5px ; border-bottom-style: solid;
                     border-bottom-color: rgb(221, 221, 221);" class="order-title">
                     Order Summary
                </h1>

                <div class="SummaryContainer">

                    <div class ="totalChild">
                        <h1>Total Price</h1>
                        <h2>GH₵\${totalPrice}</h2>
                    </div>

                    <div class ="totalChild">
                        <h1>Total Quantity</h1>
                        <h2>\${totalQuantity}</h2>
                    </div>
 
                </div>

                <div class="main-total-container">
                    <h1>Total</h1>
                    <h2>GH₵\${totalPrice}</h2>   
                </div>

                <button class="checkout">
                    Checkout on Whatsapp
                </button>
\`;
}

function attachCheckoutListener() {
    const checkoutButtons = document.querySelectorAll(".checkout");

    if (!checkoutButtons.length) {
        return;
    }

    checkoutButtons.forEach((button) => {
        button.addEventListener(
            "click",
            function () {
                handleCheckout();
            },
            { once: true },
        );
    });
}

document.addEventListener("DOMContentLoaded", () => {
    attachMenuListener();
});`,
  },
  whatsappCheckout: {
    filename: "public/js/checkout.js",
    language: "javascript",
    code: `export function handleCheckout() {
    let cart = localStorage.getItem("cart");

    if (!cart) {
        return;
    }

    cart = JSON.parse(cart);

    let message =
        "Hello ShopEleven \\u{1F44B}\\n\\nI would like to place an order:\\n\\n";

    let total = 0;

    cart.forEach((product) => {
        message += \`\${"\\u{1F6CD}"} \${product.name}
                        Quantity: \${product.quantity}
                        Price: GH₵\${product.price}

                    \`;
        total += product.quantity * Number(product.price);
    });

    message += \`\\nTotal: GH₵\${total}\`;

    const whatsappNumber = "233592128637";

    const url = \`https://wa.me/\${whatsappNumber}?text=\${encodeURIComponent(message)}\`;

    window.open(url, "_blank");

    localStorage.removeItem("cart");

    window.location.reload();
}`,
  },
};

const shopElevenCartCode = shopElevenSnippets.cart.code;

const shopElevenCheckoutCode = shopElevenSnippets.whatsappCheckout.code;

export const shopElevenUnderTheHood: CodeSnippet[] = [
  {
    id: "product-model",
    filename: "app/Models/Product.php",
    language: "php",
    code: `<?php

namespace App\\Models;
use App\\Models\\Category;

use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model
{

    protected $fillable = [
        'name',
        'description',
        'price',
        'stock_quantity',
        'image_url',
        'category_id',
        'is_featured',
    ];
    
    public function category(){
        return $this->belongsTo(Category::class);
    }
}`,
  },
  {
    id: "cart-session",
    filename: "public/js/cart.js",
    language: "javascript",
    code: shopElevenCartCode,
  },
  {
    id: "whatsapp-helper",
    filename: "public/js/checkout.js",
    language: "javascript",
    code: shopElevenCheckoutCode,
  },
];
