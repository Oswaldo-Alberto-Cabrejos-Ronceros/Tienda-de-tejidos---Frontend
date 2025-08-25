import type { ColorService } from "../domain/services/ColorService";

export class RemoveColorUseCase {
  constructor(private readonly colorService: ColorService) {}

 async execute(id: number): Promise<void> {
    return this.colorService.remove(id);
  }
}