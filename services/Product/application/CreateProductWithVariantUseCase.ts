import type { Product } from "../domain/models/Product";
import type { ProductWithVariantRequest } from "../domain/models/ProductWithVariantRequest";
import type { ProductService } from "../domain/services/ProductService";

export class CreateProductWithVariantUseCase {
  constructor(private readonly service: ProductService) {}

  execute(product: ProductWithVariantRequest, file: File): Promise<Product> {
    return this.service.createWithVariant(product, file);
  }
}
