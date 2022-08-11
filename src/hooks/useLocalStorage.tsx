import type { CartItemType } from "../types";

const useLocalStorage = () => {
  const addItem = (item: CartItemType) => {
    if (typeof window !== "undefined") {
      const currentStorage = localStorage.getItem("cart");

      if (!currentStorage) {
        return localStorage.setItem("cart", JSON.stringify([item]));
      }

      const parsedStorage = JSON.parse(currentStorage);

      if (parsedStorage.find(({ id }: { id: number }) => item.id === id)) {
        const newStorage = parsedStorage.map((cartItem: CartItemType) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );

        return localStorage.setItem("cart", JSON.stringify(newStorage));
      } else {
        return localStorage.setItem(
          "cart",
          JSON.stringify([...parsedStorage, item])
        );
      }
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

  const increaseQuantity = (itemId: number) => {
    if (typeof window !== "undefined") {
      const currentStorage = localStorage.getItem("cart");

      if (currentStorage) {
        const parsedStorage = JSON.parse(currentStorage);

        const newStorage = parsedStorage.map((cartItem: CartItemType) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        return localStorage.setItem("cart", JSON.stringify(newStorage));
      }
    }
  };

  const decreaseQuantity = (itemId: number) => {
    if (typeof window !== "undefined") {
      const currentStorage = localStorage.getItem("cart");

      if (currentStorage) {
        const parsedStorage = JSON.parse(currentStorage);

        const newStorage = parsedStorage.map((cartItem: CartItemType) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );

        return localStorage.setItem("cart", JSON.stringify(newStorage));
      }
    }
  };

  return [
    addItem,
    removeAllItems,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  ] as const;
};

export default useLocalStorage;
