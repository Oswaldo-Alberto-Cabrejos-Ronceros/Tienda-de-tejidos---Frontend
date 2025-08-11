import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";
import type { Product } from "../domain/models/Product";
import type { ProductWithVariants } from "../domain/models/ProductWithVariants";
import type { ProductRequest } from "../domain/models/ProductRequest";
import type { ProductUpdateRequest } from "../domain/models/ProductUpdateRequest";
import type { ProductService } from "../domain/services/ProductService";
import type { Page } from "~/services/common/models/Page";
import type { ProductWithVariantRequest } from "../domain/models/ProductWithVariantRequest";

export class ProductServiceImpl implements ProductService {
  constructor(private readonly httpClient: HttpClient) {}

  private urlBase = "/product";

  async create(product: ProductRequest): Promise<Product> {
    const { data } = await this.httpClient.post<Product>(this.urlBase, product);
    return data;
  }

  async createWithVariant(
    productWithVariantRequest: ProductWithVariantRequest,
    image: File
  ): Promise<ProductWithVariants> {
    if (!import.meta.client)
      throw new Error("Esta funcion es solo para el cliente");
    const formData = new FormData();
    Object.entries(productWithVariantRequest).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });
    formData.append("image", image);
    const { data } = await this.httpClient.post<ProductWithVariants>(
      `${this.urlBase}/variant`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
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
  ): Promise<Page<ProductWithVariants>> {
    const queryParams: Record<string, string | number> = { page, size };
    if (categoryId) {
      queryParams.categoryId = categoryId;
    }

    if (productName) {
      queryParams.productName = productName;
    }
    const { data } = await this.httpClient.get<Page<ProductWithVariants>>(
      `${this.urlBase}/variants/search`,
      {
        params: queryParams,
      }
    );
    return data;
  }
}
