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
        div {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
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

        @media screen and (min-width: 600px) {
          div {
            flex-direction: row;
            justify-content: space-between;
          }

          h2,
          ul {
            flex: 1;
          }
        }
      `}</style>
      <style jsx>{`
        h2 {
          font-size: ${sizes.mobile.text.h4};
        }

        .quantity {
          color: ${colors.primary};
        }

        @media screen and (min-width: 600px) {
          h2 {
            font-size: ${sizes.desktop.text.h3};
            line-height: ${sizes.desktop.lineHeight.h3};
            letter-spacing: ${sizes.desktop.letterSpacing.h3};
          }
        }
      `}</style>
    </>
  );
};

export default ProductContent;
