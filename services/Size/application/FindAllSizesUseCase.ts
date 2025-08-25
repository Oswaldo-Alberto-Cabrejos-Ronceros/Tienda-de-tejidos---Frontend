import type { Size } from "../domain/models/Size";
import type { SizeService } from "../domain/services/SizeService";

export class FindAllSizesUseCase {
  constructor(private readonly sizeService: SizeService) {}

  async execute(): Promise<Size[]> {
    return this.sizeService.findAll();
  }
}