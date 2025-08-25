import type { SizeService } from "../domain/services/SizeService";

export class RemoveSizeUseCase {
  constructor(private readonly sizeService: SizeService) {}

  async execute(id: number): Promise<void> {
    return this.sizeService.remove(id);
  }
}