import type { User } from "../domain/models/User";
import type { UserUpdateRequest } from "../domain/models/UserUpdateRequest";
import type { UserService } from "../domain/services/UserService";

export class UpdateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: number, userUpdateRequest: UserUpdateRequest): Promise<User> {
    return this.userService.update(id, userUpdateRequest);
  }
}