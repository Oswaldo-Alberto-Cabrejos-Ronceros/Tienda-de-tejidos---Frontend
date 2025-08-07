import { productVariantImageUseCases } from "~/dependency-injection/ProductVariantImageContainer";
import { useAsyncHandler } from "./useAsyncHandler";
import type { ProductVariantImageRequest } from "~/services/ProductVariantImage/domain/models/ProductVariantImageRequest";

export const useProductVariantImage = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();
  //functions
  const create = async (
    productVariantImageRequest: ProductVariantImageRequest,
    image: File
  ) => {
    return await runUseCase("createProductVariantImage", () =>
      productVariantImageUseCases.create.execute(
        productVariantImageRequest,
        image
      )
    );
  };
  const findAll = async () => {
    return await runUseCase("findAllProductVariantImages", () =>
      productVariantImageUseCases.findAll.execute()
    );
  };
  const findById = async (id: number) => {
    return await runUseCase("findProductVariantImageById", () =>
      productVariantImageUseCases.findById.execute(id)
    );
  };
  const update = async (
    id: number,
    productVariantImageRequest: ProductVariantImageRequest,
    image?: File
  ) => {
    return await runUseCase("updateProductVariantImage", () =>
      productVariantImageUseCases.update.execute(
        id,
        productVariantImageRequest,
        image
      )
    );
  };
  const remove = async (id: number) => {
    return await runUseCase("removeProductVariantImage", () =>
      productVariantImageUseCases.delete.execute(id)
    );
  };
  return {
    create,
    findAll,
    findById,
    update,
    remove,
    loading,
    error,
  };
};
