import type { AuthenticationService } from "../domain/services/AuthenticationService";

export class LogoutAuthUseCase {
  constructor(private readonly authenticationService: AuthenticationService) {}
  async execute(): Promise<void> {
    return this.authenticationService.logout();
  }
}
