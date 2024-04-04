import express from "express";
import { controllerTryCatch } from "../../middleware";
import * as exampleController from '../../controller/example.controller';

const router = express.Router();

router.post('/', controllerTryCatch(exampleController.getExample));

export default router;