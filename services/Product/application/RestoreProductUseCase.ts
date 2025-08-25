import type { ProductService } from "../domain/services/ProductService";

export class RestoreProductUseCase {
  constructor(private readonly service: ProductService) {}

  execute(id: number): Promise<void> {
    return this.service.restore(id);
  }
}