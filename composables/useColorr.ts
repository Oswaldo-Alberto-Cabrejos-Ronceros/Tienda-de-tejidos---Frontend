import { useColorUseCases } from "~/dependency-injection/ColorContainer";
import { useAsyncHandler } from "./useAsyncHandler";
import type { ColorRequest } from "~/services/Color/domain/models/ColorRequest";

export const useColorr = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();
  //use cases
  const colorUseCases = useColorUseCases();

  //functions
  const create = async (colorRequest: ColorRequest) => {
    return await runUseCase("createColor", () =>
      colorUseCases.create.execute(colorRequest)
    );
  };
  const findAll = async () => {
    return await runUseCase("findAllColors", () =>
      colorUseCases.findAll.execute()
    );
  };
  const findById = async (id: number) => {
    return await runUseCase("findColorById", () =>
      colorUseCases.findById.execute(id)
    );
  };
  const update = async (id: number, colorRequest: ColorRequest) => {
    return await runUseCase("updateColor", () =>
      colorUseCases.update.execute(id, colorRequest)
    );
  };
  const remove = async (id: number) => {
    return await runUseCase("removeColor", () =>
      colorUseCases.remove.execute(id)
    );
  };
  const restore = async (id: number) => {
    return await runUseCase("restoreColor", () =>
      colorUseCases.restore.execute(id)
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
