import { safeFetch } from "~/utilities/safeFetch";
import type { AuthRequest } from "../domain/models/AuthRequest";
import type { AuthResponse } from "../domain/models/AuthResponse";
import type { AuthenticationService } from "../domain/services/AuthenticationService";

export class AuthenticationServiceImpl implements AuthenticationService {
  private readonly config = useRuntimeConfig();
  private baseURL = this.config.public.apiBase as string;
  async login(authRequest: AuthRequest): Promise<AuthResponse> {
    const data = await safeFetch<AuthResponse>(`${this.baseURL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(authRequest),
    });
    return data;
  }
  async logout(): Promise<void> {
    await safeFetch<void>(`${this.baseURL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  }
}
