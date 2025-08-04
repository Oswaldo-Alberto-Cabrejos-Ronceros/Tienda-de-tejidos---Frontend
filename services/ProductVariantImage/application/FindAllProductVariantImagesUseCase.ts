import type { ProductVariantImageService } from "../domain/services/ProductVariantImageService";
import type { ProductVariantImage } from "../domain/models/ProductVariantImage";

export class FindAllProductVariantImagesUseCase {
  constructor(private readonly service: ProductVariantImageService) {}

  execute(): Promise<ProductVariantImage[]> {
    return this.service.findAll();
  }
}