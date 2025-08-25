import { CreateUserUseCase } from "~/services/User/application/CreateUserUseCase";
import { FindAllUsersUseCase } from "~/services/User/application/FindAllUsersUseCase";
import { FindUserByIdUseCase } from "~/services/User/application/FindUserByIdUseCase";
import { RemoveUserUseCase } from "~/services/User/application/RemoveUserUseCase";
import { RestoreUserUseCase } from "~/services/User/application/RestoreUserUseCase";
import { UpdateUserUseCase } from "~/services/User/application/UpdateUserUseCase";
import { FindUserByEmailUseCase } from "~/services/User/application/FindUserByEmailUseCase";

import { UserServiceImpl } from "~/services/User/infrastructure/UserServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

export const useUserUseCases = () => {
  //http client instance
  const { $httpClient } = useNuxtApp();
  // instancia del servicio
  const userService = new UserServiceImpl($httpClient as AxiosHttpClient);

  return {
    create: new CreateUserUseCase(userService),
    findAll: new FindAllUsersUseCase(userService),
    findById: new FindUserByIdUseCase(userService),
    findByEmail: new FindUserByEmailUseCase(userService),
    remove: new RemoveUserUseCase(userService),
    restore: new RestoreUserUseCase(userService),
    update: new UpdateUserUseCase(userService),
  };
};
