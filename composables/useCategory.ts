import { categoryUseCases } from "~/dependency-injection/CategoryContainer";
import { useAsyncHandler } from "./useAsyncHandler";
import type { CategoryRequest } from "~/services/Category/domain/models/CategoryRequest";

export const useCategory = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();

  //instance of category store
  const categoryStore = useCategoryStore();

  //functions
  const create = async (categoryRequest: CategoryRequest, image: File) => {
    return await runUseCase("createCategory", () =>
      categoryUseCases.create.execute(categoryRequest, image)
    );
  };
  const findAll = async () => {
    return await runUseCase("findAllCategories", () =>
      categoryUseCases.findAll.execute()
    );
  };
  const findById = async (id: number) => {
    return await runUseCase("findCategoryById", () =>
      categoryUseCases.findById.execute(id)
    );
  };
  const update = async (
    id: number,
    categoryRequest: CategoryRequest,
    image?: File
  ) => {
    return await runUseCase("updateCategory", () =>
      categoryUseCases.update.execute(id, categoryRequest, image)
    );
  };
  const remove = async (id: number) => {
    return await runUseCase("removeCategory", () =>
      categoryUseCases.remove.execute(id)
    );
  };
  const restore = async (id: number) => {
    return await runUseCase("restoreCategory", () =>
      categoryUseCases.restore.execute(id)
    );
  };

  //for search category id by name
  const findByName = (name: string) => {
    return categoryStore.searchCategoryByName(name);
  };

  return {
    create,
    findAll,
    findById,
    update,
    remove,
    restore,
    findByName,
    loading,
    error,
  };
};
