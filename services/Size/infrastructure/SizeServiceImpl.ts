import type { SizeService } from "../domain/services/SizeService";
import type { SizeRequest } from "../domain/models/SizeRequest";
import type { SizeUpdateRequest } from "../domain/models/SizeUpdateRequest";
import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";
import type { Size } from "../domain/models/Size";

export class SizeServiceImpl implements SizeService {
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/size";

  async create(sizeRequest: SizeRequest): Promise<Size> {
    const { data } = await this.httpClient.post<Size>(
      this.urlBase,
      sizeRequest
    );
    return data;
  }

  async findAll(): Promise<Size[]> {
    const { data } = await this.httpClient.get<Size[]>(this.urlBase);
    return data;
  }

  async findById(id: number): Promise<Size> {
    const { data } = await this.httpClient.get<Size>(`${this.urlBase}/${id}`);
    return data;
  }

  async update(
    id: number,
    sizeUpdateRequest: SizeUpdateRequest
  ): Promise<Size> {
    const { data } = await this.httpClient.patch<Size>(
      `${this.urlBase}/${id}`,
      sizeUpdateRequest
    );
    return data;
  }

  async remove(id: number): Promise<void> {
    await this.httpClient.delete(`${this.urlBase}/${id}`);
  }

  async restore(id: number): Promise<void> {
    await this.httpClient.patch(`${this.urlBase}/restore/${id}`);
  }
}
