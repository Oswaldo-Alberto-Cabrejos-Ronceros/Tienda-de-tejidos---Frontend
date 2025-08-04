import type { Product } from "../models/Product";
import type { ProductWithVariants } from "../models/ProductWithVariants";
import type { ProductRequest } from "../models/ProductRequest";
import type { ProductUpdateRequest } from "../models/ProductUpdateRequest";

export interface ProductService {
  create(product: ProductRequest): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product>;
  update(id: number, product: ProductUpdateRequest): Promise<Product>;
  remove(id: number): Promise<void>;
  restore(id: number): Promise<void>;

  findAllWithVariants(): Promise<ProductWithVariants[]>;
  findByIdWithVariants(id: number): Promise<ProductWithVariants>;
  findByCategoryWithVariants(categoryId: number): Promise<ProductWithVariants[]>;
  findWithVariantsWithFilterAndPagination(
    page: number,
    size: number,
    categoryId?: number,
    productName?: string
  ): Promise<ProductWithVariants[]>;
}