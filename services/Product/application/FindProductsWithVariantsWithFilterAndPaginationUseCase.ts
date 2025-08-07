import type { ProductService } from "../domain/services/ProductService";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";
import type { Page } from "~/services/common/models/Page";

export class FindProductsWithVariantsWithFilterAndPaginationUseCase {
  constructor(private readonly service: ProductService) {}

  execute(
    page: number,
    size: number,
    categoryId?: number,
    productName?: string
  ): Promise<Page<ProductWithVariants>> {
    return this.service.findWithVariantsWithFilterAndPagination(
      page,
      size,
      categoryId,
      productName
    );
  }
}
