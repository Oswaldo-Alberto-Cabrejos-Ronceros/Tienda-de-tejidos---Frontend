import type { ProductVariantService } from "../domain/services/ProductVariantService";
import type { ProductVariant } from "../domain/models/ProductVariant";
import type { ProductVariantUpdateRequest } from "../domain/models/ProductUpdateRequest";

export class UpdateProductVariantUseCase {
  constructor(private readonly service: ProductVariantService) {}

  execute(
    id: number,
    productVariantUpdateRequest: ProductVariantUpdateRequest
  ): Promise<ProductVariant> {
    return this.service.update(id, productVariantUpdateRequest);
  }
}
