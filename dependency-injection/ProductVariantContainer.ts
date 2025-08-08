import { CreateProductVariantUseCase } from "~/services/ProductVariant/application/CreateProductVariantUseCase";
import { FindAllProductVariantsUseCase } from "~/services/ProductVariant/application/FindAllProductVariantsUseCase";
import { FindProductVariantByIdUseCase } from "~/services/ProductVariant/application/FindProductVariantByIdUseCase";
import { RemoveProductVariantUseCase } from "~/services/ProductVariant/application/RemoveProductVariantUseCase";
import { RestoreProductVariantUseCase } from "~/services/ProductVariant/application/RestoreProductVariantUseCase";
import { UpdateProductVariantUseCase } from "~/services/ProductVariant/application/UpdateProductVariantUseCase";

import { ProductVariantServiceImpl } from "~/services/ProductVariant/infrastructure/ProductVariantServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

export const useProductVariantUseCases = () => {
  //http client instance
  const { $httpClient } = useNuxtApp();
  // instancia del servicio
  const productVariantService = new ProductVariantServiceImpl(
    $httpClient as AxiosHttpClient
  );
  return {
    create: new CreateProductVariantUseCase(productVariantService),
    findAll: new FindAllProductVariantsUseCase(productVariantService),
    findById: new FindProductVariantByIdUseCase(productVariantService),
    remove: new RemoveProductVariantUseCase(productVariantService),
    restore: new RestoreProductVariantUseCase(productVariantService),
    update: new UpdateProductVariantUseCase(productVariantService),
  };
};
