import type { ProductRequest } from "~/services/Product/domain/models/ProductRequest";
import { useAsyncHandler } from "./useAsyncHandler";
import { useProductUseCases } from "~/dependency-injection/ProductContainer";

export const useProductt = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();
  //use cases
  const productUseCases = useProductUseCases();
  //functions
  const create = async (productRequest: ProductRequest) => {
    return await runUseCase("createProduct", () =>
      productUseCases.create.execute(productRequest)
    );
  };
  const findAll = async () => {
    return await runUseCase("findAllProducts", () =>
      productUseCases.findAll.execute()
    );
  };
  const findById = async (id: number) => {
    return await runUseCase("findProductById", () =>
      productUseCases.findById.execute(id)
    );
  };
  const update = async (id: number, productRequest: ProductRequest) => {
    return await runUseCase("updateProduct", () =>
      productUseCases.update.execute(id, productRequest)
    );
  };

  const findAllWithVariants = async () => {
    return await runUseCase("findAllProductsWithVariants", () =>
      productUseCases.findAllWithVariants.execute()
    );
  };
  const findByIdWithVariants = async (id: number) => {
    return await runUseCase("findProductByIdWithVariants", () =>
      productUseCases.findWithVariant.execute(id)
    );
  };
  const findByCategoryWithVariants = async (categoryId: number) => {
    return await runUseCase("findProductsByCategoryWithVariants", () =>
      productUseCases.findWithVariantsByCategory.execute(categoryId)
    );
  };
  const findWithVariantsWithFilterAndPagination = async (
    page: number,
    size: number,
    categoryId?: number,
    productName?: string
  ) => {
    return await runUseCase(
      "findProductsWithVariantsWithFilterAndPagination",
      () =>
        productUseCases.findWithVariantsWithFilterAndPagination.execute(
          page,
          size,
          categoryId,
          productName
        )
    );
  };

  const remove = async (id: number) => {
    return await runUseCase("removeProduct", () =>
      productUseCases.remove.execute(id)
    );
  };
  const restore = async (id: number) => {
    return await runUseCase("restoreProduct", () =>
      productUseCases.restore.execute(id)
    );
  };
  return {
    create,
    findAll,
    findById,
    update,
    findAllWithVariants,
    findByIdWithVariants,
    findByCategoryWithVariants,
    findWithVariantsWithFilterAndPagination,
    remove,
    restore,
    loading,
    error,
  };
};
