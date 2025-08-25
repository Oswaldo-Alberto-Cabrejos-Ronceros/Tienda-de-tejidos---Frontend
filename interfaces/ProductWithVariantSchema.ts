export interface ProductWithVariantSchema {
  name: string;
  description: string;
  categoryId: number;
  gender: string;
  colorId: number;
  sizeId: number;
  price: number;
  image: null | File;
}
