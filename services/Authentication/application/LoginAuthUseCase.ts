import type { AuthRequest } from "../domain/models/AuthRequest";
import type { AuthResponse } from "../domain/models/AuthResponse";
import type { AuthenticationService } from "../domain/services/AuthenticationService";

export class LoginAuthUseCase {
  constructor(private readonly authenticationService: AuthenticationService) {}
  async execute(authRequest: AuthRequest): Promise<AuthResponse> {
    return this.authenticationService.login(authRequest);
  }
}
