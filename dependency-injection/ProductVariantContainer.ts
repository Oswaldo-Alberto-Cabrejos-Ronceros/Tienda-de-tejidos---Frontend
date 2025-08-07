import { CreateProductVariantUseCase } from "~/services/ProductVariant/application/CreateProductVariantUseCase";
import { FindAllProductVariantsUseCase } from "~/services/ProductVariant/application/FindAllProductVariantsUseCase";
import { FindProductVariantByIdUseCase } from "~/services/ProductVariant/application/FindProductVariantByIdUseCase";
import { RemoveProductVariantUseCase } from "~/services/ProductVariant/application/RemoveProductVariantUseCase";
import { RestoreProductVariantUseCase } from "~/services/ProductVariant/application/RestoreProductVariantUseCase";
import { UpdateProductVariantUseCase } from "~/services/ProductVariant/application/UpdateProductVariantUseCase";

import { ProductVariantServiceImpl } from "~/services/ProductVariant/infrastructure/ProductVariantServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

// instancia del cliente http
const axiosHttpClient = new AxiosHttpClient();

// instancia del servicio
const productVariantService = new ProductVariantServiceImpl(axiosHttpClient);

export const productVariantUseCases = {
  create: new CreateProductVariantUseCase(productVariantService),
  findAll: new FindAllProductVariantsUseCase(productVariantService),
  findById: new FindProductVariantByIdUseCase(productVariantService),
  remove: new RemoveProductVariantUseCase(productVariantService),
  restore: new RestoreProductVariantUseCase(productVariantService),
  update: new UpdateProductVariantUseCase(productVariantService),
};