import type { Size } from "../domain/models/Size";
import type { SizeService } from "../domain/services/SizeService";

export class FindSizeByIdUseCase {
  constructor(private readonly sizeService: SizeService) {}

  async execute(id: number): Promise<Size> {
    return this.sizeService.findById(id);
  }
}