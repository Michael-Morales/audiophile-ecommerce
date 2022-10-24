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
    <div
      className={`flex justify-between bg-light-grey ${
        small
          ? "min-w-[96px] py-[.438rem] px-[.75rem]"
          : "min-w-[120px] p-[.938rem]"
      }`}
    >
      <button
        className="px-2 font-bold opacity-25 transition hover:text-orange hover:opacity-100 disabled:pointer-events-none disabled:opacity-5"
        onClick={quantity <= 1 && remove ? remove : decrement}
        disabled={!remove && quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="px-2 font-bold opacity-25 transition hover:text-orange hover:opacity-100"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
