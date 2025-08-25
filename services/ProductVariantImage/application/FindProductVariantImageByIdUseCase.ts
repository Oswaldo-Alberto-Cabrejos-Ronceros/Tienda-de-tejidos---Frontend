import type { ProductVariantImageService } from "../domain/services/ProductVariantImageService";
import type { ProductVariantImage } from "../domain/models/ProductVariantImage";

export class FindProductVariantImageByIdUseCase {
  constructor(private readonly service: ProductVariantImageService) {}

  execute(id: number): Promise<ProductVariantImage> {
    return this.service.findById(id);
  }
}