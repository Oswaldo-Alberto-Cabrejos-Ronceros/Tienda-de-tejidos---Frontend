import { CreateSizeUseCase } from "~/services/Size/application/CreateSizeUseCase";
import { FindAllSizesUseCase } from "~/services/Size/application/FindAllSizesUseCase";
import { FindSizeByIdUseCase } from "~/services/Size/application/FindSizeByIdUseCase";
import { RemoveSizeUseCase } from "~/services/Size/application/RemoveSizeUseCase";
import { RestoreSizeUseCase } from "~/services/Size/application/RestoreSizeUseCase";
import { UpdateSizeUseCase } from "~/services/Size/application/UpdateSizeUseCase";

import { SizeServiceImpl } from "~/services/Size/infrastructure/SizeServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

// instancia del cliente http
const axiosHttpClient = new AxiosHttpClient();

// instancia del servicio
const sizeService = new SizeServiceImpl(axiosHttpClient);

export const sizeUseCases = {
  create: new CreateSizeUseCase(sizeService),
  findAll: new FindAllSizesUseCase(sizeService),
  findById: new FindSizeByIdUseCase(sizeService),
  remove: new RemoveSizeUseCase(sizeService),
  restore: new RestoreSizeUseCase(sizeService),
  update: new UpdateSizeUseCase(sizeService),
};
