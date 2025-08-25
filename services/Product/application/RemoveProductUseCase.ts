import type { ProductService } from "../domain/services/ProductService";

export class RemoveProductUseCase {
  constructor(private readonly service: ProductService) {}

  execute(id: number): Promise<void> {
    return this.service.remove(id);
  }
}