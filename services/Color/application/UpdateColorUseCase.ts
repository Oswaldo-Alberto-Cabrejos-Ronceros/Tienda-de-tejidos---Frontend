import type { Color } from "../domain/models/Color";
import type { ColorUpdateRequest } from "../domain/models/ColorUpdateRequest";
import type { ColorService } from "../domain/services/ColorService";

export class UpdateColorUseCase {
  constructor(private readonly colorService: ColorService) {}

  async execute(
    id: number,
    colorUpdateRequest: ColorUpdateRequest
  ): Promise<Color> {
    return this.colorService.update(id, colorUpdateRequest);
  }
}
