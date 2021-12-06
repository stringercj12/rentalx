import { request, response, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/CreateCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const categories: Category[] = [];

const categoriesRepository = CategoriesRepository.getInstance();
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {

});

export { categoriesRoutes };