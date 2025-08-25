import type { ProductVariantService } from "../domain/services/ProductVariantService";

export class RemoveProductVariantUseCase {
  constructor(private readonly service: ProductVariantService) {}

  execute(id: number): Promise<void> {
    return this.service.remove(id);
  }
}
