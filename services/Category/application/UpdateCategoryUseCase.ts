import type { Category } from "../domain/models/Category";
import type { CategoryUpdateRequest } from "../domain/models/CategoryUpdateRequest";
import type { CategoryService } from "../domain/services/CategoryService";

export class UpdateCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(
    id: number,
    categoryUpdateRequest: CategoryUpdateRequest,
    image?: File
  ): Promise<Category> {
    return this.categoryService.update(id, categoryUpdateRequest, image);
  }
}