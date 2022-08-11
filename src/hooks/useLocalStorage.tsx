import type { CartItemType } from "../types";

const useLocalStorage = () => {
  const addToLocalStorage = (item: CartItemType) => {
    if (typeof window !== "undefined") {
      const currentStorage = localStorage.getItem("cart");

      if (!currentStorage) {
        return localStorage.setItem("cart", JSON.stringify([item]));
      }

      const parsedStorage = JSON.parse(currentStorage);

      return localStorage.setItem(
        "cart",
        JSON.stringify([...parsedStorage, item])
      );
    }
  };

  return [addToLocalStorage] as const;
};

export default useLocalStorage;
