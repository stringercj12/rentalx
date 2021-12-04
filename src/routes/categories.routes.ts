import { request, response, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/CreateCategory";

const categoriesRoutes = Router();

const categories: Category[] = [];

const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(201).json(allCategories);
});

categoriesRoutes.get("/", (request, response) => {

});

export { categoriesRoutes };