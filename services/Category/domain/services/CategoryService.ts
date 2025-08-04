import type { Category } from "../models/Category";
import type { CategoryRequest } from "../models/CategoryRequest";
import type { CategoryUpdateRequest } from "../models/CategoryUpdateRequest";

export interface CategoryService {
  create(categoryRequest: CategoryRequest, image: File): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: number): Promise<Category>;
  update(
    id: number,
    categoryUpdateRequest: CategoryUpdateRequest,
    image?: File
  ): Promise<Category>;
  remove(id: number): Promise<void>;
  restore(id: number): Promise<void>;
}
