import type { User } from "../domain/models/User";
import type { UserService } from "../domain/services/UserService";

export class FindUserByIdUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: number): Promise<User> {
    return this.userService.findById(id);
  }
}