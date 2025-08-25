import type { Color } from "../domain/models/Color";
import type { ColorService } from "../domain/services/ColorService";

export class FindAllColorsUseCase {
  constructor(private readonly colorService: ColorService) {}

  async execute(): Promise<Color[]> {
    return this.colorService.findAll();
  }
}
