import { FindAllProductVariantImagesUseCase } from "~/services/ProductVariantImage/application/FindAllProductVariantImagesUseCase";
import { FindProductVariantImageByIdUseCase } from "~/services/ProductVariantImage/application/FindProductVariantImageByIdUseCase";
import { UpdateProductVariantImageUseCase } from "~/services/ProductVariantImage/application/UpdateProductVariantImageUseCase";

import { ProductVariantImageServiceImpl } from "~/services/ProductVariantImage/infrastructure/ProductVariantImageServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";
import { DeleteProductVariantImageUseCase } from "~/services/ProductVariantImage/application/DeleteProductVariantImageUseCase";
import { CreateProductVariantImageUseCase } from "~/services/ProductVariantImage/application/CreateProductVariantImageUseCase ";

// instancia del cliente http
const axiosHttpClient = new AxiosHttpClient();

// instancia del servicio
const productVariantImageService = new ProductVariantImageServiceImpl(
  axiosHttpClient
);

export const productVariantImageUseCases = {
  create: new CreateProductVariantImageUseCase(productVariantImageService),
  findAll: new FindAllProductVariantImagesUseCase(productVariantImageService),
  findById: new FindProductVariantImageByIdUseCase(productVariantImageService),
  delete: new DeleteProductVariantImageUseCase(productVariantImageService),
  update: new UpdateProductVariantImageUseCase(productVariantImageService),
};
