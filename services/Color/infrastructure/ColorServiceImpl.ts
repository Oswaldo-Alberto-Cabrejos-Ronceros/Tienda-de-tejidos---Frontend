import type { ColorService } from "../domain/services/ColorService";
import type { Color } from "../domain/models/Color";
import type { ColorRequest } from "../domain/models/ColorRequest";
import type { ColorUpdateRequest } from "../domain/models/ColorUpdateRequest";
import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";

export class ColorServiceImpl implements ColorService {
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/color";

  async create(colorRequest: ColorRequest): Promise<Color> {
    const { data } = await this.httpClient.post<Color>(this.urlBase, colorRequest);
    return data;
  }

  async findAll(): Promise<Color[]> {
    const { data } = await this.httpClient.get<Color[]>(this.urlBase);
    return data;
  }

  async findById(id: number): Promise<Color> {
    const { data } = await this.httpClient.get<Color>(`${this.urlBase}/${id}`);
    return data;
  }

  async update(id: number, colorUpdateRequest: ColorUpdateRequest): Promise<Color> {
    const { data } = await this.httpClient.patch<Color>(`${this.urlBase}/${id}`, colorUpdateRequest);
    return data;
  }

  async remove(id: number): Promise<void> {
    await this.httpClient.delete(`${this.urlBase}/${id}`);
  }

  async restore(id: number): Promise<void> {
    await this.httpClient.patch(`${this.urlBase}/restore/${id}`);
  }
}