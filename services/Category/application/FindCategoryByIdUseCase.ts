import type { Category } from "../domain/models/Category";
import type { CategoryService } from "../domain/services/CategoryService";

export class FindCategoryByIdUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }
}