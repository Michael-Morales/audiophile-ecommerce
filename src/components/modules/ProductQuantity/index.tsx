import { styles, dynamicStyles } from "./styles";

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

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default ProductQuantity;
