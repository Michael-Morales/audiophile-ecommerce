import { styles, dynamicStyles } from "./styles";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  small?: boolean;
  remove?: () => void;
};

const ProductQuantity = ({
  quantity,
  increment,
  decrement,
  small,
  remove,
}: Props) => {
  return (
    <>
      <div>
        <button
          onClick={quantity <= 1 && remove ? remove : decrement}
          disabled={!remove && quantity <= 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
      <style jsx>{`
        div {
          padding: ${small ? "0.7rem 1.2rem" : "1.5rem"};
          min-width: ${small ? "96px" : "120px"};
        }
      `}</style>
    </>
  );
};

export default ProductQuantity;
