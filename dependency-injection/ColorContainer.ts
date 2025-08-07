import { CreateColorUseCase } from "~/services/Color/application/CreateColorUseCase";
import { FindAllColorsUseCase } from "~/services/Color/application/FindAllColorsUseCase";
import { FindColorByIdUseCase } from "~/services/Color/application/FindColorByIdUseCase";
import { RemoveColorUseCase } from "~/services/Color/application/RemoveColorUseCase";
import { RestoreColorUseCase } from "~/services/Color/application/RestoreColorUseCase";
import { UpdateColorUseCase } from "~/services/Color/application/UpdateColorUseCase";

import { ColorServiceImpl } from "~/services/Color/infrastructure/ColorServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

// http client instance
const axiosHttpClient = new AxiosHttpClient();

// service instance
const colorService = new ColorServiceImpl(axiosHttpClient);

export const colorUseCases = {
  create: new CreateColorUseCase(colorService),
  findAll: new FindAllColorsUseCase(colorService),
  findById: new FindColorByIdUseCase(colorService),
  remove: new RemoveColorUseCase(colorService),
  restore: new RestoreColorUseCase(colorService),
  update: new UpdateColorUseCase(colorService),
};
