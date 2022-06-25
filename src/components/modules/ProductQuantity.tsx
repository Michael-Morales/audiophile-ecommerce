import { colors } from "../../styles/theme";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

const ProductQuantity = ({ quantity, increment, decrement }: Props) => {
  return (
    <>
      <div>
        <button onClick={decrement} disabled={quantity <= 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem;
          min-width: 120px;
        }

        button {
          padding: 0 0.8rem;
          background-color: unset;
          opacity: 0.25;
          border: unset;
          outline: none;
          cursor: pointer;
          transition: ease 0.3s;
        }
      `}</style>
      <style jsx>{`
        div {
          background-color: ${colors.grey};
        }

        button:hover {
          color: ${colors.primary};
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default ProductQuantity;
