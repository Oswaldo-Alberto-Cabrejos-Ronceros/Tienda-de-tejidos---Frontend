import type { ProductService } from "../domain/services/ProductService";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";

export class FindProductsWithVariantsByCategoryUseCase {
  constructor(private readonly service: ProductService) {}

  execute(categoryId: number): Promise<ProductWithVariants[]> {
    return this.service.findByCategoryWithVariants(categoryId);
  }
}