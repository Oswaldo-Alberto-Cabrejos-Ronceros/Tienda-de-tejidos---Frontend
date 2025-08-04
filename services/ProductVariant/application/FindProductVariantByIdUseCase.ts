import type { ProductVariantService } from "../domain/services/ProductVariantService";
import type { ProductVariant } from "../domain/models/ProductVariant";

export class FindProductVariantByIdUseCase {
  constructor(private readonly service: ProductVariantService) {}

  execute(id: number): Promise<ProductVariant> {
    return this.service.findById(id);
  }
}