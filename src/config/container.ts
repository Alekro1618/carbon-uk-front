import { HttpClient } from "../api/HttpClient";
import { GenerationService } from "../services/GenerationService";

const httpClient = new HttpClient("http://localhost:8080");
export const generationService = new GenerationService(httpClient);