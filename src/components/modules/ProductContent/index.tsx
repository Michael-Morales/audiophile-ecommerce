import type { IncludedItemType } from "../../../types";

type Props = {
  items: Array<IncludedItemType>;
};

const ProductContent = ({ items }: Props) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:justify-between lg:flex-1 lg:flex-col lg:justify-start lg:gap-8">
      <h2 className="text-xl leading-xl tracking-2 sm:flex-1 sm:text-3xl sm:leading-xl sm:tracking-2 lg:flex-none">
        in the box
      </h2>
      <ul className="mb-8 flex flex-col gap-2 sm:flex-1 lg:flex-none">
        {items.map(({ quantity, item }) => (
          <li className="flex gap-6" key={item.name}>
            <span className="font-bold text-orange">{quantity}x</span>
            <span className="capitalize opacity-50">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductContent;
