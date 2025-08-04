import type { Color } from "../domain/models/Color";
import type { ColorRequest } from "../domain/models/ColorRequest";
import type { ColorService } from "../domain/services/ColorService";

export class CreateColorUseCase {
  constructor(private readonly colorService: ColorService) {}

  async execute(colorRequest: ColorRequest): Promise<Color> {
    return this.colorService.create(colorRequest);
  }
}
