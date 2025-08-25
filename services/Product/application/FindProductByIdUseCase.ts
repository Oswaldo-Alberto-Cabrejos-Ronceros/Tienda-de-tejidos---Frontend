import type { Product } from "../domain/models/Product";
import type { ProductService } from "../domain/services/ProductService";

export class FindProductByIdUseCase {
  constructor(private readonly service: ProductService) {}

  execute(id: number): Promise<Product> {
    return this.service.findById(id);
  }
}