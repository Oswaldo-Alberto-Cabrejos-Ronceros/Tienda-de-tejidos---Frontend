import type { ProductRequest } from "../domain/models/ProductRequest";
import type { Product } from "../domain/models/Product";
import type { ProductService } from "../domain/services/ProductService";

export class CreateProductUseCase {
  constructor(private readonly service: ProductService) {}

  execute(product: ProductRequest): Promise<Product> {
    return this.service.create(product);
  }
}