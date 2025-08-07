import { CreateCategoryUseCase } from "~/services/Category/application/CreateCategoryUseCase";
import { FindAllCategoriesUseCase } from "~/services/Category/application/FindAllCategoriesUseCase";
import { FindCategoryByIdUseCase } from "~/services/Category/application/FindCategoryByIdUseCase";
import { RemoveCategoryUseCase } from "~/services/Category/application/RemoveCategoryUseCase";
import { RestoreCategoryUseCase } from "~/services/Category/application/RestoreCategoryUseCase";
import { UpdateCategoryUseCase } from "~/services/Category/application/UpdateCategoryUseCase";

import { CategoryServiceImpl } from "~/services/Category/infrastructure/CategoryServiceImpl";
import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

//http client instance
const axiosHttpClient = new AxiosHttpClient();

// service instance
const categoryService = new CategoryServiceImpl(axiosHttpClient);

export const categoryUseCases = {
  create: new CreateCategoryUseCase(categoryService),
  findAll: new FindAllCategoriesUseCase(categoryService),
  findById: new FindCategoryByIdUseCase(categoryService),
  remove: new RemoveCategoryUseCase(categoryService),
  restore: new RestoreCategoryUseCase(categoryService),
  update: new UpdateCategoryUseCase(categoryService),
};
