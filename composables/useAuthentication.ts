import type { AuthResponse } from "~/services/Authentication/domain/models/AuthResponse";
import { useAsyncHandler } from "./useAsyncHandler";
import { useAuthenticationUseCases } from "~/dependency-injection/AuthenticationContainer";
import type { AuthRequest } from "~/services/Authentication/domain/models/AuthRequest";

export const useAuthentication = () => {
  //get from useAsyncHandle
  const { loading, error, runUseCase } = useAsyncHandler();
  //use cases
  const authenticationUseCases = useAuthenticationUseCases();
  //functions
  //authentication store instance
  const authenticationStore = useAuthStore();
  const login = async (authRequest: AuthRequest): Promise<AuthResponse> => {
    const authResponse = await runUseCase("login", () =>
      authenticationUseCases.login.execute(authRequest)
    );
    authenticationStore.setUser(authResponse);
    return authResponse;
  };
  const logout = async (): Promise<void> => {
    authenticationStore.logout();
    return await runUseCase("logout", () =>
      authenticationUseCases.logout.execute()
    );
  };

  const getIsAdmin = (): boolean => {
    if (import.meta.client) {
      authenticationStore.recoverUserFromSession();
    }
    return authenticationStore.isAdmin ?? false;
  };

  //for get userId
  const getUserId = () => {
    if (!authenticationStore.userId) {
      console.error("User id no encontrado");
      throw new Error("User id no encontrado");
    }
    return authenticationStore.userId;
  };

  //for get role
  const getRole = () => {
    if (!authenticationStore.userRole) {
      console.error("User role no encontrado");
      throw new Error("User role no encontrado");
    }
    return authenticationStore.userRole;
  };
  return {
    login,
    logout,
    getUserId,
    getRole,
    getIsAdmin,
    loading,
    error,
  };
};
