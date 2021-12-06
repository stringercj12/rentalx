import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

// specificationRoutes.get("/", (request, response) => {
//   const allSpecifications = specificationRepository.list();

//   return response.status(201).json(allSpecifications);
// });


export { specificationRoutes }