import type { AuthRequest } from "../models/AuthRequest";
import type { AuthResponse } from "../models/AuthResponse";

export interface AuthenticationService {
  login(authRequest: AuthRequest): Promise<AuthResponse>;
  logout(): Promise<void>;
}
