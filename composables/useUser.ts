import type { UserRequest } from "~/services/User/domain/models/UserRequest";
import { useAsyncHandler } from "./useAsyncHandler";
import { userUseCases } from "~/dependency-injection/UserContainer";

export const useUser = () => {
  const { loading, error, runUseCase } = useAsyncHandler();
  const create = async (userRequest: UserRequest) => {
    return await runUseCase("createUser", () =>
      userUseCases.create.execute(userRequest)
    );
  };
  const findAll = async () => {
    return await runUseCase("findAllUsers", () =>
      userUseCases.findAll.execute()
    );
  };
  const findById = async (id: number) => {
    return await runUseCase("findUserById", () =>
      userUseCases.findById.execute(id)
    );
  };
  const update = async (id: number, userRequest: UserRequest) => {
    return await runUseCase("updateUser", () =>
      userUseCases.update.execute(id, userRequest)
    );
  };
  const remove = async (id: number) => {
    return await runUseCase("removeUser", () =>
      userUseCases.remove.execute(id)
    );
  };
  const restore = async (id: number) => {
    return await runUseCase("restoreUser", () =>
      userUseCases.restore.execute(id)
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
