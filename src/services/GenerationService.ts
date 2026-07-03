import type { GenerationStamp } from "../entities/Generation";
import type { HttpClient } from "../api/HttpClient";

export interface IGenerationService {
    getGeneration(): Promise<GenerationStamp[]>
    getOptimal(window: number): Promise<GenerationStamp>
}

export class GenerationService implements IGenerationService {
    private http: HttpClient
    constructor(http: HttpClient) {
        this.http = http;
    }

    async getGeneration(): Promise<GenerationStamp[]> {
        return this.http.get("/generation");
    }

    async getOptimal(window : number): Promise<GenerationStamp> {
        return this.http.get(`/generation/optimal?window=${window}`);
    }
}