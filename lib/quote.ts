export type QuoteItem = {
  id: string;
  name: string;
  code: string;
  category: string;
  categoryId?: string;
  image?: string;
  quantity: number;
};

export const QUOTE_STORAGE_KEY = "nordvia-quote-list";
export const QUOTE_UPDATED_EVENT = "nordvia:quote-updated";

function normalizeQuoteItems(value: unknown): QuoteItem[] {
  if (!Array.isArray(value)) return [];

  return value.filter((item): item is QuoteItem => {
    return (
      typeof item === "object" &&
      item !== null &&
      typeof item.id === "string" &&
      typeof item.name === "string" &&
      typeof item.code === "string" &&
      typeof item.category === "string" &&
      typeof item.quantity === "number" &&
      Number.isFinite(item.quantity) &&
      item.quantity >= 1
    );
  }).map((item) => ({
    ...item,
    categoryId:
      typeof item.categoryId === "string" ? item.categoryId : undefined,
    image: typeof item.image === "string" ? item.image : undefined,
    quantity: Math.min(999999, Math.floor(item.quantity)),
  }));
}

export function getQuoteItems(): QuoteItem[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = localStorage.getItem(QUOTE_STORAGE_KEY);
    if (!saved) return [];

    return normalizeQuoteItems(JSON.parse(saved));
  } catch {
    return [];
  }
}

export function saveQuoteItems(items: QuoteItem[]) {
  if (typeof window === "undefined") return;

  const safeItems = normalizeQuoteItems(items);

  try {
    localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(safeItems));
    window.dispatchEvent(new CustomEvent(QUOTE_UPDATED_EVENT));
  } catch (error) {
    console.error("Unable to save quote items:", error);
  }
}

export function addQuoteItem(
  product: Omit<QuoteItem, "quantity">
) {
  const items = getQuoteItems();
  const existing = items.find((item) => item.id === product.id);

  const updatedItems = existing
    ? items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.min(999999, item.quantity + 1) }
          : item
      )
    : [...items, { ...product, quantity: 1 }];

  saveQuoteItems(updatedItems);

  return updatedItems;
}