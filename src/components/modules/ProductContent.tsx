import type { IncludedItemType } from "../../types";

import { sizes, colors } from "../../styles/theme";

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

      <style jsx>{`
        h2 {
          margin-bottom: 2.4rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 0;
        }

        li {
          display: flex;
          gap: 2.4rem;
        }

        .quantity {
          font-weight: 700;
        }

        .item {
          text-transform: capitalize;
          opacity: 0.5;
        }
      `}</style>
      <style jsx>{`
        h2 {
          font-size: ${sizes.mobile.text.h4};
        }

        .quantity {
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
};

export default ProductContent;
