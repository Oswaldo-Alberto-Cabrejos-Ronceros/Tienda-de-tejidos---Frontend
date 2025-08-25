import type { Product } from "../domain/models/Product";
import type { ProductService } from "../domain/services/ProductService";

export class FindAllProductsUseCase {
  constructor(private readonly service: ProductService) {}

  execute(): Promise<Product[]> {
    return this.service.findAll();
  }
}