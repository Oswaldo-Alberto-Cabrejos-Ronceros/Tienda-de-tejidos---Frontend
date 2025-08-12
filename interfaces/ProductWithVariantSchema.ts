export interface ProductWithVariantSchema {
  name: string;
  description: string;
  categoryId: number;
  colorId: number;
  sizeId: number;
  price: number;
  image: null | File; 
}
