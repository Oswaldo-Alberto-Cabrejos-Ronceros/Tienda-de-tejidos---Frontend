import type { ProductVariantImageService } from "../domain/services/ProductVariantImageService";
import type { ProductVariantImage } from "../domain/models/ProductVariantImage";
import type { ProductVariantImageUpdateRequest } from "../domain/models/ProductVariantImageUpdateRequest";

export class UpdateProductVariantImageUseCase {
  constructor(private readonly service: ProductVariantImageService) {}

  execute(id: number, productVariantImageUpdateRequest: ProductVariantImageUpdateRequest, image?: File): Promise<ProductVariantImage> {
    return this.service.update(id, productVariantImageUpdateRequest, image);
  }
}