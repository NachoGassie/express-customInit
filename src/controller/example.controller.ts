import { Request, Response } from "express";
import ResponseHandler from "../http/responseHandler";
import { ResponseOk } from "../http/customResponseOk";
import * as exampleService from '../service';

export function getExample(req: Request, res: Response){
  // http/express logic
  const exampleResponse = exampleService.getExample();
  return ResponseHandler(res, new ResponseOk(exampleResponse));
}