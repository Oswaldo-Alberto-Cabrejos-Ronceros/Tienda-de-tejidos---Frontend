import type { ProductVariantImageService } from "../domain/services/ProductVariantImageService";

export class DeleteProductVariantImageUseCase {
  constructor(private readonly service: ProductVariantImageService) {}

  execute(id: number): Promise<void> {
    return this.service.remove(id);
  }
}
