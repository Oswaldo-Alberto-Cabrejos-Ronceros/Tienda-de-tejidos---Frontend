import type { Size } from "../domain/models/Size";
import type { SizeUpdateRequest } from "../domain/models/SizeUpdateRequest";
import type { SizeService } from "../domain/services/SizeService";

export class UpdateSizeUseCase {
  constructor(private readonly sizeService: SizeService) {}

  async execute(id: number, sizeRequest: SizeUpdateRequest): Promise<Size> {
    return this.sizeService.update(id, sizeRequest);
  }
}