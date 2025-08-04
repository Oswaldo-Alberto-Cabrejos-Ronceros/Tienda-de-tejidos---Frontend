import type { ProductVariantImageService } from "../domain/services/ProductVariantImageService";
import type { ProductVariantImage } from "../domain/models/ProductVariantImage";
import type { ProductVariantImageRequest } from "../domain/models/ProductVariantImageRequest";
import type { ProductVariantImageUpdateRequest } from "../domain/models/ProductVariantImageUpdateRequest";
import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";

export class ProductVariantImageServiceImpl
  implements ProductVariantImageService
{
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/product-variant-image";

  async create(
    productVariantImageRequest: ProductVariantImageRequest,
    image: File
  ): Promise<ProductVariantImage> {
    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "productVariantId",
      productVariantImageRequest.productVariantId.toString()
    );
    const { data } = await this.httpClient.post<ProductVariantImage>(
      this.urlBase,
      formData
    );
    return data;
  }

  async findAll(): Promise<ProductVariantImage[]> {
    const { data } = await this.httpClient.get<ProductVariantImage[]>(
      this.urlBase
    );
    return data;
  }

  async findById(id: number): Promise<ProductVariantImage> {
    const { data } = await this.httpClient.get<ProductVariantImage>(
      `${this.urlBase}/${id}`
    );
    return data;
  }

  async update(
    id: number,
    productVariantImageUpdateRequest: ProductVariantImageUpdateRequest,
    image?: File
  ): Promise<ProductVariantImage> {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    if (productVariantImageUpdateRequest.productVariantId) {
      formData.append(
        "productVariantId",
        productVariantImageUpdateRequest.productVariantId.toString()
      );
    }

    const { data } = await this.httpClient.patch<ProductVariantImage>(
      `${this.urlBase}/${id}`,
      formData
    );
    return data;
  }

  async remove(id: number): Promise<void> {
    await this.httpClient.delete(`${this.urlBase}/${id}`);
  }
}
