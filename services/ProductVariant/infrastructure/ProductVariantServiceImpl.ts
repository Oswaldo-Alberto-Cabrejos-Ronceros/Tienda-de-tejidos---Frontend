import type { ProductVariantService } from "../domain/services/ProductVariantService";
import type { ProductVariant } from "../domain/models/ProductVariant";
import type { ProductVariantRequest } from "../domain/models/ProductVariantRequest";
import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";
import type { ProductVariantUpdateRequest } from "../domain/models/ProductUpdateRequest";

export class ProductVariantServiceImpl implements ProductVariantService {
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/product-variant";

  async create(variantRequest: ProductVariantRequest): Promise<ProductVariant> {
    const { data } = await this.httpClient.post<ProductVariant>(
      this.urlBase,
      variantRequest
    );
    return data;
  }

  async findAll(): Promise<ProductVariant[]> {
    const { data } = await this.httpClient.get<ProductVariant[]>(this.urlBase);
    return data;
  }

  async findById(id: number): Promise<ProductVariant> {
    const { data } = await this.httpClient.get<ProductVariant>(
      `${this.urlBase}/${id}`
    );
    return data;
  }

  async update(
    id: number,
    variantUpdate: ProductVariantUpdateRequest
  ): Promise<ProductVariant> {
    const { data } = await this.httpClient.patch<ProductVariant>(
      `${this.urlBase}/${id}`,
      variantUpdate
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
