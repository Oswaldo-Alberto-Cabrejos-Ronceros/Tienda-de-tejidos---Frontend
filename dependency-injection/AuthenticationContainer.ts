import { LoginAuthUseCase } from "~/services/Authentication/application/LoginAuthUseCase";
import { LogoutAuthUseCase } from "~/services/Authentication/application/LogoutAuthUseCase";
import { AuthenticationServiceImpl } from "~/services/Authentication/infrastructure/AuthenticationServiceImpl";

//instance of http client
//authentication service
const authenticationService = new AuthenticationServiceImpl();

 export const authenticationUseCases = {
  login: new LoginAuthUseCase(authenticationService),
  logout: new LogoutAuthUseCase(authenticationService),
};
