import { useEffect, useState } from "react";
import type { GenerationStamp } from "../entities/Generation";
import { generationService } from "../config/container";
import { GenerationPieChart } from "./GenerationPieChart";
import "./MainPanel.css";

export function MainPanel() {
    const [stamps, setStamps] = useState<GenerationStamp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(
        () => {
            setLoading(true);
            setError(null);

            generationService
                .getGeneration()
                .then((data) => setStamps(data))
                .catch((err: Error) => setError(err.message))
                .finally(() => setLoading(false));
        }, 
        []
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (stamps.length === 0) return <p>No stamps found.</p>;

    return (
        <div className="grid">
            <div className="item">
                <h1 className="title">Today</h1>
                <GenerationPieChart generationStamp = {stamps[0]} />
            </div>
            <div className="item">
                <h1 className="title">Tomorrow</h1>
                <GenerationPieChart generationStamp = {stamps[1]} />
            </div>
            <div className="item">
                <h1 className="title">The day after tomorrow</h1>
                <GenerationPieChart generationStamp = {stamps[2]} />
            </div>
        </div>
    )
}