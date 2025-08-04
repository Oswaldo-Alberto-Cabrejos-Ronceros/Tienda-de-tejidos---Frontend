import type { SizeService } from "../domain/services/SizeService";

export class RestoreSizeUseCase {
  constructor(private readonly sizeService: SizeService) {}

  async execute(id: number): Promise<void> {
    return this.sizeService.restore(id);
  }
}
