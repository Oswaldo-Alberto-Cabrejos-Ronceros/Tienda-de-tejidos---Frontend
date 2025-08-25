import type { Size } from "../models/Size";
import type { SizeRequest } from "../models/SizeRequest";
import type { SizeUpdateRequest } from "../models/SizeUpdateRequest";

export interface SizeService {
  create(sizeRequest: SizeRequest): Promise<Size>;
  findAll(): Promise<Size[]>;
  findById(id: number): Promise<Size>;
  update(id: number, sizeUpdateRequest: SizeUpdateRequest): Promise<Size>;
  remove(id: number): Promise<void>;
  restore(id: number): Promise<void>;
}
