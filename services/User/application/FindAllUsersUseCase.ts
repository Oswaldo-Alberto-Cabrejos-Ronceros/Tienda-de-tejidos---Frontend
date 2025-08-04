import type { User } from "../domain/models/User";
import type { UserService } from "../domain/services/UserService";

export class FindAllUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(): Promise<User[]> {
    return this.userService.findAll();
  }
}