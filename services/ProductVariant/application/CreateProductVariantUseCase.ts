import type { ProductVariantService } from "../domain/services/ProductVariantService";
import type { ProductVariantRequest } from "../domain/models/ProductVariantRequest";
import type { ProductVariant } from "../domain/models/ProductVariant";

export class CreateProductVariantUseCase {
  constructor(private readonly service: ProductVariantService) {}

 async execute(productVariantRequest: ProductVariantRequest): Promise<ProductVariant> {
    return this.service.create(productVariantRequest);
  }
}