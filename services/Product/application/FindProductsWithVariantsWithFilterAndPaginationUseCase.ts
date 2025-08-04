import type { ProductService } from "../domain/services/ProductService";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";

export class FindProductsWithVariantsWithFilterAndPaginationUseCase {
  constructor(private readonly service: ProductService) {}

  execute(
    page: number,
    size: number,
    categoryId?: number,
    productName?: string
  ): Promise<ProductWithVariants[]> {
    return this.service.findWithVariantsWithFilterAndPagination(
      page,
      size,
      categoryId,
      productName
    );
  }
}
