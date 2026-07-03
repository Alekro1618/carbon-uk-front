import { HttpClient } from "../api/HttpClient";
import { GenerationService } from "../services/GenerationService";

const httpClient = new HttpClient(import.meta.env.VITE_API_URL);
export const generationService = new GenerationService(httpClient);