import type { ProductVariantImage } from "../models/ProductVariantImage";
import type { ProductVariantImageRequest } from "../models/ProductVariantImageRequest";
import type { ProductVariantImageUpdateRequest } from "../models/ProductVariantImageUpdateRequest";

export interface ProductVariantImageService {
  create(
    productVariantImageRequest: ProductVariantImageRequest,
    image: File
  ): Promise<ProductVariantImage>;
  findAll(): Promise<ProductVariantImage[]>;
  findById(id: number): Promise<ProductVariantImage>;
  update(
    id: number,
    productVariantImageUpdateRequest: ProductVariantImageUpdateRequest,
    image?: File
  ): Promise<ProductVariantImage>;
  remove(id: number): Promise<void>;
}
