import type { Color } from "../domain/models/Color";
import type { ColorService } from "../domain/services/ColorService";

export class FindColorByIdUseCase {
  constructor(private readonly colorService: ColorService) {}

 async execute(id: number): Promise<Color> {
    return this.colorService.findById(id);
  }
}