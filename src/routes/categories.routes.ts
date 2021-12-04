import { request, response, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CategoryServices } from "../modules/cars/services/CategoryServices";

const categoriesRoutes = Router();

const categories: Category[] = [];

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  try {
    const createCategoryService = new CategoryServices(categoriesRepository);

    createCategoryService.execute({ name, description });

    return response.status(201).send();
  } catch (error) {

    return response.status(400).json({ error });
  }
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(201).json(allCategories);
});

categoriesRoutes.get("/", (request, response) => {

});

export { categoriesRoutes };