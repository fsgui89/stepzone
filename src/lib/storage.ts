import type { Product } from "@/data/products";

export type StoredCartItem = {
  product: Product;
  quantity: number;
};

const CART_KEY = "stepzone-cart";

export function getStoredCart(): StoredCartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem(CART_KEY);

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveStoredCart(cart: StoredCartItem[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearStoredCart() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(CART_KEY);
}