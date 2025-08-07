import type { ProductVariantRequest } from "~/services/ProductVariant/domain/models/ProductVariantRequest";
import { useAsyncHandler } from "./useAsyncHandler";
import { productVariantUseCases } from "~/dependency-injection/ProductVariantContainer";

export const useProductVariant = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();
  //functions
  const create = async (productVariantRequest: ProductVariantRequest) => {
    return await runUseCase("createProductVariant", () =>
      productVariantUseCases.create.execute(productVariantRequest)
    );
  };
  const findAll = async () => {
    return await runUseCase("findAllProductVariants", () =>
      productVariantUseCases.findAll.execute()
    );
  };
  const findById = async (id: number) => {
    return await runUseCase("findProductVariantById", () =>
      productVariantUseCases.findById.execute(id)
    );
  };
  const update = async (
    id: number,
    productVariantRequest: ProductVariantRequest
  ) => {
    return await runUseCase("updateProductVariant", () =>
      productVariantUseCases.update.execute(id, productVariantRequest)
    );
  };
  const remove = async (id: number) => {
    return await runUseCase("removeProductVariant", () =>
      productVariantUseCases.remove.execute(id)
    );
  };
  const restore = async (id: number) => {
    return await runUseCase("restoreProductVariant", () =>
      productVariantUseCases.restore.execute(id)
    );
  };
  return {
    create,
    findAll,
    findById,
    update,
    remove,
    restore,
    loading,
    error,
  };
};
