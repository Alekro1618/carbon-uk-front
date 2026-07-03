export class HttpClient {
    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(path: string) : Promise<T> {
        const res = await fetch(`${this.baseUrl}${path}`);
        console.log(res.body)
        if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
        return res.json()
    }
}