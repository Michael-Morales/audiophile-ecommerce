import type { Dispatch } from "react";
import type { CartItemType } from "../types";

import { createContext, useReducer } from "react";

type Props = {
  children: JSX.Element;
};

type ActionsMap = {
  add_item: CartItemType;
  remove_item: number;
  remove_all: undefined;
  increase_quantity: number;
  decrease_quantity: number;
};

type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];

const initialState: Array<CartItemType> = [];

const reducer = (state: Array<CartItemType>, action: Actions) => {
  switch (action.type) {
    case "add_item":
      return [...state, action.payload];

    case "remove_item":
      return state.filter(({ id }) => id !== action.payload);

    case "remove_all":
      return [];

    case "increase_quantity":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "decrease_quantity":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

export const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext<{
  state: Array<CartItemType>;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
