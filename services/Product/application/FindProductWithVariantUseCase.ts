import type { ProductService } from "../domain/services/ProductService";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";

export class FindProductWithVariantUseCase {
  constructor(private readonly service: ProductService) {}

  execute(id: number): Promise<ProductWithVariants> {
    return this.service.findByIdWithVariants(id);
  }
}