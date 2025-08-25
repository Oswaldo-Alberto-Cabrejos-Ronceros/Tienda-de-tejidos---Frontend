import type { UserService } from "../domain/services/UserService";

export class RestoreUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: number): Promise<void> {
    await this.userService.restore(id);
  }
}