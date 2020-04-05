export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Floral Plants" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Ornamental Plants" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Pots & Accessories" }
];

export function getCategories() {
  return categories.filter(g => g);
}
