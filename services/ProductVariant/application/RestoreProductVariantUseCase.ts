import type { ProductVariantService } from "../domain/services/ProductVariantService";

export class RestoreProductVariantUseCase {
  constructor(private readonly service: ProductVariantService) {}

  execute(id: number): Promise<void> {
    return this.service.restore(id);
  }
}
