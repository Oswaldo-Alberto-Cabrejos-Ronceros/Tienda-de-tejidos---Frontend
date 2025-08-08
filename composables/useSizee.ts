import type { Size } from "~/services/Size/domain/models/Size";
import { useAsyncHandler } from "./useAsyncHandler";
import { useSizeUseCases } from "~/dependency-injection/SizeContainer";
import type { SizeRequest } from "~/services/Size/domain/models/SizeRequest";

export const useSizee = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();
  //use cases
  const sizeUseCases = useSizeUseCases();
  const create = async (sizeRequest: SizeRequest): Promise<Size> => {
    return await runUseCase("create", () =>
      sizeUseCases.create.execute(sizeRequest)
    );
  };
  const findAll = async (): Promise<Size[]> => {
    return await runUseCase("findAll", () => sizeUseCases.findAll.execute());
  };
  const findById = async (id: number): Promise<Size> => {
    return await runUseCase("findById", () =>
      sizeUseCases.findById.execute(id)
    );
  };
  const update = async (
    id: number,
    sizeRequest: SizeRequest
  ): Promise<Size> => {
    return await runUseCase("update", () =>
      sizeUseCases.update.execute(id, sizeRequest)
    );
  };
  const remove = async (id: number): Promise<void> => {
    return await runUseCase("remove", () => sizeUseCases.remove.execute(id));
  };
  const restore = async (id: number): Promise<void> => {
    return await runUseCase("restore", () => sizeUseCases.restore.execute(id));
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
