import type { ColorService } from "../domain/services/ColorService";

export class RestoreColorUseCase {
  constructor(private readonly colorService: ColorService) {}

 async execute(id: number): Promise<void> {
    return this.colorService.restore(id);
  }
}
