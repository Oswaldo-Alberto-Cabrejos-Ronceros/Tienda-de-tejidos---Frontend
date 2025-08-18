export interface ProductWithVariants {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  gender: string;
  variants: {
    id: number;
    color: {
      name: string;
      hexCode: string;
    };
    size: {
      name: string;
    };
    price: number;
    images: string[];
  }[];
}
