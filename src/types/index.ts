type ImagePaths = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type IncludedItem = {
  quantity: number;
  item: string;
};

type OtherProduct = {
  slug: string;
  name: string;
  image: ImagePaths;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: ImagePaths;
  category: string;
  categoryImage: ImagePaths;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<IncludedItem>;
  gallery: {
    first: ImagePaths;
    second: ImagePaths;
    third: ImagePaths;
  };
  others: Array<OtherProduct>;
};
