import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import type { HttpClient } from "../domain/services/HttpClient";
import type { RequestConfig } from "../domain/models/RequestConfig";

export class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;
  //for adapt from requestConfig to AxiosRequestConfig
  private adaptConfig(config?: RequestConfig): AxiosRequestConfig {
    return {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
      responseType: config?.responseType,
    };
  }

  constructor(baseURL:string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      timeout: 5000,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    //interceptor for response
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          if (!originalRequest.url.includes("/auth/refresh")) {
            try {
              //try refresh token
              await this.axiosInstance.post("/auth/refresh");
              return this.axiosInstance(originalRequest);
            } catch (refreshError) {
              // redirige to login
              window.location.href = "/auth/login";
              return Promise.reject(refreshError);
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: RequestConfig): Promise<{ data: T }> {
    try {
      const response = await this.axiosInstance.get<T>(
        url,
        this.adaptConfig(config)
      );
      return { data: response.data };
    } catch (e) {
      this.handleError(e as Error);
      throw e;
    }
  }

  async post<T>(
    url: string,
    body: unknown,
    config?: RequestConfig
  ): Promise<{ data: T }> {
    try {
      const response = await this.axiosInstance.post<T>(
        url,
        body,
        this.adaptConfig(config)
      );
      return { data: response.data };
    } catch (e) {
      this.handleError(e as Error);
      throw e;
    }
  }
  async put<T>(
    url: string,
    body: unknown,
    config?: RequestConfig
  ): Promise<{ data: T }> {
    try {
      const response = await this.axiosInstance.put(
        url,
        body,
        this.adaptConfig(config)
      );
      return { data: response.data };
    } catch (e) {
      this.handleError(e as Error);
      throw e;
    }
  }
  async patch<T>(
    url: string,
    body?: unknown,
    config?: RequestConfig
  ): Promise<{ data: T }> {
    try {
      const response = await this.axiosInstance.patch(
        url,
        body,
        this.adaptConfig(config)
      );
      return { data: response.data };
    } catch (e) {
      this.handleError(e as Error);
      throw e;
    }
  }
  async delete<T>(url: string, config?: RequestConfig): Promise<{ data: T }> {
    try {
      const response = await this.axiosInstance.delete(
        url,
        this.adaptConfig(config)
      );
      return { data: response.data };
    } catch (e) {
      this.handleError(e as Error);
      throw e;
    }
  }

  private handleError(error: Error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "HTTP error:",
        error.response?.status,
        error.response?.statusText,
        error.response?.data
      );
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
