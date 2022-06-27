import type { IncludedItemType } from "../../../types";

import { styles, dynamicStyles } from "./styles";

type Props = {
  items: Array<IncludedItemType>;
};

const ProductContent = ({ items }: Props) => {
  return (
    <>
      <div>
        <h2>in the box</h2>
        <ul>
          {items.map(({ quantity, item }) => (
            <li key={item}>
              <span className="quantity">{quantity}x</span>
              <span className="item">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default ProductContent;
