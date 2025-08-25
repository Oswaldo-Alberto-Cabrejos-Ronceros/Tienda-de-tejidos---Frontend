import type { ProductVariantUpdateRequest } from "../models/ProductUpdateRequest";
import type { ProductVariant } from "../models/ProductVariant";
import type { ProductVariantRequest } from "../models/ProductVariantRequest";

export interface ProductVariantService {
  create(data: ProductVariantRequest): Promise<ProductVariant>;
  findAll(): Promise<ProductVariant[]>;
  findById(id: number): Promise<ProductVariant>;
  update(
    id: number,
    data: ProductVariantUpdateRequest
  ): Promise<ProductVariant>;
  remove(id: number): Promise<void>;
  restore(id: number): Promise<void>;
}
