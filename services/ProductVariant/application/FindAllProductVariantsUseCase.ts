import type { ProductVariantService } from "../domain/services/ProductVariantService";
import type { ProductVariant } from "../domain/models/ProductVariant";

export class FindAllProductVariantsUseCase {
  constructor(private readonly service: ProductVariantService) {}

  async execute(): Promise<ProductVariant[]> {
    return this.service.findAll();
  }
}
