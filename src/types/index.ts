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
  id: string;
  slug: string;
  name: string;
  cartName: string;
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
  id: string;
  slug: string;
  name: string;
  categoryImage: ImagePathsType;
  isNew: boolean;
  description: string;
};

export type CartItemType = {
  id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
  slug: string;
};

export type FormValuesType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPin: string;
};
