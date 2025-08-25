import type { Category } from "../domain/models/Category";
import type { CategoryRequest } from "../domain/models/CategoryRequest";
import type { CategoryService } from "../domain/services/CategoryService";

export class CreateCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}
  async execute(
    categoryRequest: CategoryRequest,
    image: File
  ): Promise<Category> {
    return this.categoryService.create(categoryRequest, image);
  }
}
