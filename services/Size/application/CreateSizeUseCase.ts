import type { Size } from "../domain/models/Size";
import type { SizeRequest } from "../domain/models/SizeRequest";
import type { SizeService } from "../domain/services/SizeService";

export class CreateSizeUseCase {
  constructor(private readonly sizeService: SizeService) {}

  async execute(sizeRequest: SizeRequest): Promise<Size> {
    return this.sizeService.create(sizeRequest);
  }
}