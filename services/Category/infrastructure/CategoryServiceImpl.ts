import type { HttpClient } from "~/services/HttpClient/domain/services/HttpClient";
import type { Category } from "../domain/models/Category";
import type { CategoryRequest } from "../domain/models/CategoryRequest";
import type { CategoryUpdateRequest } from "../domain/models/CategoryUpdateRequest";
import type { CategoryService } from "../domain/services/CategoryService";

export class CategoryServiceImpl implements CategoryService {
  constructor(private readonly httpClient: HttpClient) {}
  private urlBase = "/category";
  async create(
    categoryRequest: CategoryRequest,
    image: File
  ): Promise<Category> {
    //new form data
    if (!import.meta.client)
      throw new Error("Esta funcion es solo para el cliente");
    const formData = new FormData();
    formData.append("name", categoryRequest.name);
    formData.append("description", categoryRequest.description),
      formData.append("image", image);
    const { data } = await this.httpClient.post<Category>(
      this.urlBase,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }
  async findAll(): Promise<Category[]> {
    const { data } = await this.httpClient.get<Category[]>(this.urlBase);
    return data;
  }
  async findById(id: number): Promise<Category> {
    const { data } = await this.httpClient.get<Category>(
      `${this.urlBase}/${id}`
    );
    return data;
  }

  async update(
    id: number,
    categoryUpdateRequest: CategoryUpdateRequest,
    image?: File
  ): Promise<Category> {
    //new form data
    if (!import.meta.client)
      throw new Error("Esta funcion es solo para el cliente");
    const formData = new FormData();
    if (categoryUpdateRequest.name) {
      formData.append("name", categoryUpdateRequest.name);
    }
    if (categoryUpdateRequest.description) {
      formData.append("description", categoryUpdateRequest.description);
    }
    if (image) {
      formData.append("image", image);
    }

    const { data } = await this.httpClient.patch<Category>(
      `${this.urlBase}/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
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
