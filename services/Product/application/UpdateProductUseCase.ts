import type { ProductUpdateRequest } from "../domain/models/ProductUpdateRequest";
import type { Product } from "../domain/models/Product";
import type { ProductService } from "../domain/services/ProductService";

export class UpdateProductUseCase {
  constructor(private readonly service: ProductService) {}

  execute(id: number, update: ProductUpdateRequest): Promise<Product> {
    return this.service.update(id, update);
  }
}