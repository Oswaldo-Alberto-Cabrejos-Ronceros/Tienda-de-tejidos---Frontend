import type { CategoryService } from "../domain/services/CategoryService";

export class RemoveCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(id: number): Promise<void> {
    return this.categoryService.remove(id);
  }
}