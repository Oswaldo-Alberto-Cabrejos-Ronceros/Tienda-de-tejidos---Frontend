import type { User } from "../domain/models/User";
import type { UserService } from "../domain/services/UserService";

export class FindUserByEmailUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(email: string): Promise<User> {
    return this.userService.findByEmail(email);
  }
}