import type { UserService } from "../domain/services/UserService";
import type { User } from "../domain/models/User";
import type { UserRequest } from "../domain/models/UserRequest";
import type { UserUpdateRequest } from "../domain/models/UserUpdateRequest";
import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";

export class UserServiceImpl implements UserService {
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/user";

  async create(userRequest: UserRequest): Promise<User> {
    const { data } = await this.httpClient.post<User>(this.urlBase, userRequest);
    return data;
  }

  async findAll(): Promise<User[]> {
    const { data } = await this.httpClient.get<User[]>(this.urlBase);
    return data;
  }

  async findById(id: number): Promise<User> {
    const { data } = await this.httpClient.get<User>(`${this.urlBase}/${id}`);
    return data;
  }

  async findByEmail(email: string): Promise<User> {
    const { data } = await this.httpClient.get<User>(`${this.urlBase}/email/${email}`);
    return data;
  }

  async update(id: number, userUpdateRequest: UserUpdateRequest): Promise<User> {
    const { data } = await this.httpClient.patch<User>(`${this.urlBase}/${id}`, userUpdateRequest);
    return data;
  }

  async remove(id: number): Promise<void> {
    await this.httpClient.delete(`${this.urlBase}/${id}`);
  }

  async restore(id: number): Promise<void> {
    await this.httpClient.patch(`${this.urlBase}/restore/${id}`);
  }
}