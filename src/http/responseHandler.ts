import { Response } from "express";
import { CustomReponse } from "./customResponseOk";

function ResponseHandler(res: Response, httpResponse: CustomReponse<unknown>){
  const { statusCode, data } = httpResponse;
  
  const headerConfig = {
    'Date': new Date().toUTCString(),
    'Access-Control-Expose-Headers': 'Date',
  }
  
  return res.set(headerConfig).status(statusCode).json(
    data
  );
}

export default ResponseHandler;