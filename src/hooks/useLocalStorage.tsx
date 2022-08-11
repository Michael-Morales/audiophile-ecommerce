import type { CartItemType } from "../types";

const useLocalStorage = () => {
  const addItem = (item: CartItemType) => {
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

  const removeAllItems = () => {
    if (typeof window !== "undefined") localStorage.removeItem("cart");
  };

  const removeItem = (itemId: number) => {
    if (typeof window !== "undefined") {
      const currentStorage = localStorage.getItem("cart");

      if (currentStorage) {
        const parsedStorage = JSON.parse(currentStorage);

        const newStorage = parsedStorage.filter(
          ({ id }: { id: number }) => id !== itemId
        );

        if (newStorage.length === 0) return localStorage.removeItem("cart");

        return localStorage.setItem("cart", JSON.stringify(newStorage));
      }
    }
  };

  return [addItem, removeAllItems, removeItem] as const;
};

export default useLocalStorage;
