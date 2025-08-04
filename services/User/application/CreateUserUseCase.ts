import type { User } from "../domain/models/User";
import type { UserRequest } from "../domain/models/UserRequest";
import type { UserService } from "../domain/services/UserService";

export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(userRequest: UserRequest): Promise<User> {
    return this.userService.create(userRequest);
  }
}