import { LoginAuthUseCase } from "~/services/Authentication/application/LoginAuthUseCase";
import { LogoutAuthUseCase } from "~/services/Authentication/application/LogoutAuthUseCase";
import { AuthenticationServiceImpl } from "~/services/Authentication/infrastructure/AuthenticationServiceImpl";

//instance of http client
//authentication service

export const useAuthenticationUseCases = () => {
  const { $authenticationService } = useNuxtApp();
  return {
    login: new LoginAuthUseCase(
      $authenticationService as AuthenticationServiceImpl
    ),
    logout: new LogoutAuthUseCase(
      $authenticationService as AuthenticationServiceImpl
    ),
  };
};
