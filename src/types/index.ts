export type ImagePathsType = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type IncludedItemType = {
  quantity: number;
  item: string;
};

export type OtherProductType = {
  slug: string;
  name: string;
  image: ImagePathsType;
};

export type ProductType = {
  id: number;
  slug: string;
  name: string;
  image: ImagePathsType;
  category: string;
  categoryImage: ImagePathsType;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<IncludedItemType>;
  gallery: {
    first: ImagePathsType;
    second: ImagePathsType;
    third: ImagePathsType;
  };
  others: Array<OtherProductType>;
};

export type CategoryProductType = {
  id: number;
  slug: string;
  name: string;
  categoryImage: ImagePathsType;
  isNew: boolean;
  description: string;
};

export type CartItem = {
  id: number;
  quantity: number;
};
