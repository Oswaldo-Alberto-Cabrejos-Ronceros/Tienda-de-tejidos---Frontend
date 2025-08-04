import type { User } from "../models/User";
import type { UserRequest } from "../models/UserRequest";
import type { UserUpdateRequest } from "../models/UserUpdateRequest";

export interface UserService {
  create(userRequest: UserRequest): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update(id: number, userUpdateRequest: UserUpdateRequest): Promise<User>;
  remove(id: number): Promise<void>;
  restore(id: number): Promise<void>;
}