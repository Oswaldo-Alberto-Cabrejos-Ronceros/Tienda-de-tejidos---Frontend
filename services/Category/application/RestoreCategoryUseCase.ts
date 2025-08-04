import type { CategoryService } from "../domain/services/CategoryService";

export class RestoreCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(id: number): Promise<void> {
    return this.categoryService.restore(id);
  }
}