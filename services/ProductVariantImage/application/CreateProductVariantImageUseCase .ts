import type { ProductVariantImageService } from "../domain/services/ProductVariantImageService";
import type { ProductVariantImage } from "../domain/models/ProductVariantImage";
import type { ProductVariantImageRequest } from "../domain/models/ProductVariantImageRequest";

export class CreateProductVariantImageUseCase {
  constructor(private readonly service: ProductVariantImageService) {}

  execute(
    productVariantImageRequest: ProductVariantImageRequest,
    image: File
  ): Promise<ProductVariantImage> {
    return this.service.create(productVariantImageRequest, image);
  }
}
