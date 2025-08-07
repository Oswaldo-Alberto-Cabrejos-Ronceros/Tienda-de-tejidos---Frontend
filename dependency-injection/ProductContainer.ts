import { CreateProductUseCase } from "~/services/Product/application/CreateProductUseCase";
import { FindAllProductsUseCase } from "~/services/Product/application/FindAllProductsUseCase";
import { FindAllProductsWithVariantsUseCase } from "~/services/Product/application/FindAllProductsWithVariantsUseCase";
import { FindProductByIdUseCase } from "~/services/Product/application/FindProductByIdUseCase";
import { FindProductsWithVariantsByCategoryUseCase } from "~/services/Product/application/FindProductsWithVariantsByCategoryUseCase";
import { FindProductsWithVariantsWithFilterAndPaginationUseCase } from "~/services/Product/application/FindProductsWithVariantsWithFilterAndPaginationUseCase";
import { FindProductWithVariantUseCase } from "~/services/Product/application/FindProductWithVariantUseCase";
import { RemoveProductUseCase } from "~/services/Product/application/RemoveProductUseCase";
import { RestoreProductUseCase } from "~/services/Product/application/RestoreProductUseCase";
import { UpdateProductUseCase } from "~/services/Product/application/UpdateProductUseCase";

import { ProductServiceImpl } from "~/services/Product/infrastructure/ProductServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

// http client instance
const axiosHttpClient = new AxiosHttpClient();

// service instance
const productService = new ProductServiceImpl(axiosHttpClient);

export const productUseCases = {
  create: new CreateProductUseCase(productService),
  findAll: new FindAllProductsUseCase(productService),
  findAllWithVariants: new FindAllProductsWithVariantsUseCase(productService),
  findById: new FindProductByIdUseCase(productService),
  findWithVariantsByCategory: new FindProductsWithVariantsByCategoryUseCase(productService),
  findWithVariantsWithFilterAndPagination: new FindProductsWithVariantsWithFilterAndPaginationUseCase(productService),
  findWithVariant: new FindProductWithVariantUseCase(productService),
  remove: new RemoveProductUseCase(productService),
  restore: new RestoreProductUseCase(productService),
  update: new UpdateProductUseCase(productService),
};