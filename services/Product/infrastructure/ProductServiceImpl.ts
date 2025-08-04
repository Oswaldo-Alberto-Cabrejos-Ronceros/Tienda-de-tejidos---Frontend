import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";
import type { Product } from "../domain/models/Product";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";
import type { ProductRequest } from "../domain/models/ProductRequest";
import type { ProductUpdateRequest } from "../domain/models/ProductUpdateRequest";
import type { ProductService } from "../domain/services/ProductService";

export class ProductServiceImpl implements ProductService {
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/product";

  async create(product: ProductRequest): Promise<Product> {
    const { data } = await this.httpClient.post<Product>(this.urlBase, product);
    return data;
  }

  async findAll(): Promise<Product[]> {
    const { data } = await this.httpClient.get<Product[]>(this.urlBase);
    return data;
  }

  async findById(id: number): Promise<Product> {
    const { data } = await this.httpClient.get<Product>(
      `${this.urlBase}/${id}`
    );
    return data;
  }

  async update(id: number, product: ProductUpdateRequest): Promise<Product> {
    const { data } = await this.httpClient.patch<Product>(
      `${this.urlBase}/${id}`,
      product
    );
    return data;
  }

  async remove(id: number): Promise<void> {
    await this.httpClient.delete(`${this.urlBase}/${id}`);
  }

  async restore(id: number): Promise<void> {
    await this.httpClient.patch(`${this.urlBase}/restore/${id}`);
  }

  async findAllWithVariants(): Promise<ProductWithVariants[]> {
    const { data } = await this.httpClient.get<ProductWithVariants[]>(
      `${this.urlBase}/variants`
    );
    return data;
  }

  async findByIdWithVariants(id: number): Promise<ProductWithVariants> {
    const { data } = await this.httpClient.get<ProductWithVariants>(
      `${this.urlBase}/variants/${id}`
    );
    return data;
  }

  async findByCategoryWithVariants(
    categoryId: number
  ): Promise<ProductWithVariants[]> {
    const { data } = await this.httpClient.get<ProductWithVariants[]>(
      `${this.urlBase}/variants/category/${categoryId}`
    );
    return data;
  }

  async findWithVariantsWithFilterAndPagination(
    page: number,
    size: number,
    categoryId?: number,
    productName?: string
  ): Promise<ProductWithVariants[]> {
    const queryParams: Record<string, string | number> = { page, size };
    if (categoryId) {
      queryParams.categoryId = categoryId;
    }

    if (productName) {
      queryParams.productName = productName;
    }
    const { data } = await this.httpClient.get<ProductWithVariants[]>(
      `${this.urlBase}/variants/search`,
      {
        params: queryParams,
      }
    );
    return data;
  }
}
