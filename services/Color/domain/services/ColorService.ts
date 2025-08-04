
import type { Color } from "../models/Color";
import type { ColorRequest } from "../models/ColorRequest";
import type { ColorUpdateRequest } from "../models/ColorUpdateRequest";

export interface ColorService {
  create(createColorDto: ColorRequest): Promise<Color>;
  findAll(): Promise<Color[]>;
  findById(id: number): Promise<Color>;
  update(id: number, updateColorDto: ColorUpdateRequest): Promise<Color>;
  remove(id: number): Promise<void>;
  restore(id: number): Promise<void>;
}
