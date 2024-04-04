import { Request, Response } from "express";
import { HTTPSTATUS } from "../types";
import { CustomError } from "./customError";

// Generalized version, modify at will
export default function errorHandler(error: Error, _req: Request, res: Response){
  const statusCode: HTTPSTATUS = getStatusCode(error);
  const { message } = error;

  return res.status(statusCode).json({
    error: message 
  });
}

function getStatusCode(error: Error): HTTPSTATUS{
  if (error instanceof CustomError) return error.statusCode

  if ("status" in error) return error.status as HTTPSTATUS;

  return HTTPSTATUS.INTERNAL_SERVER_ERROR;
}