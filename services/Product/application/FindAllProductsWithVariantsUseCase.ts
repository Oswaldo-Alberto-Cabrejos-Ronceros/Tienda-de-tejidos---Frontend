import type { ProductService } from "../domain/services/ProductService";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";

export class FindAllProductsWithVariantsUseCase {
  constructor(private readonly service: ProductService) {}

  execute(): Promise<ProductWithVariants[]> {
    return this.service.findAllWithVariants();
  }
}