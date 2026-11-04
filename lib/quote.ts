export type QuoteItem = {
  id: string;
  name: string;
  code: string;
  category: string;
  quantity: number;
};

export const QUOTE_STORAGE_KEY = "nordvia-quote-list";
export const QUOTE_UPDATED_EVENT = "nordvia:quote-updated";

export function getQuoteItems(): QuoteItem[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = localStorage.getItem(QUOTE_STORAGE_KEY);
    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed) ? (parsed as QuoteItem[]) : [];
  } catch {
    return [];
  }
}

export function saveQuoteItems(items: QuoteItem[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(items));

  window.dispatchEvent(new CustomEvent(QUOTE_UPDATED_EVENT));
}

export function addQuoteItem(product: Omit<QuoteItem, "quantity">) {
  const items = getQuoteItems();
  const existing = items.find((item) => item.id === product.id);

  const updatedItems = existing
    ? items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    : [...items, { ...product, quantity: 1 }];

  saveQuoteItems(updatedItems);
  return updatedItems;
}