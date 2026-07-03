import { useEffect, useState } from "react";
import type { GenerationStamp } from "../entities/Generation";
import { generationService } from "../config/container";
import { format, ParseInt } from "../utils/ConvertUtils";
import "./OptimalPanel.css";
import { clearEnergy } from "../utils/GenerationUtils";

export function OptimalPanel() {
    const [stamp, setStamp] = useState<GenerationStamp>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    function fetchOptimal(window : number) {
        setLoading(true);
        setError(null);

        generationService
            .getOptimal(window)
            .then((data) => setStamp(data))
            .catch((err: Error) => setError(err.message))
            .finally(() => setLoading(false));
    }

    useEffect(
        () => {
            fetchOptimal(2);
        }, 
        []
    );

    function Chart() {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
        if (stamp == null) return <p>No stamps found.</p>;

        return (
            <div className="chart-card">
                <h2>Optimal Window</h2>
                <p className="date-range">
                    from: <span>{format(stamp.from)}</span>
                    to: <span>{format(stamp.to)}</span>
                </p>
                <p className="date-range">
                    clean energy: {clearEnergy(stamp)}%
                </p>

            </div>
        )
    }

    return (
        <div>
            <div className="controllers">
                <label className="input-group">
                    Window size (1–6):
                    <input
                        onChange={(e) => { 
                            let newval = ParseInt(e.target.value);
                            if (newval == null) { 
                                setError("Value is not a number.")
                                return; 
                            }

                            if (newval > 0 && newval < 7) {
                                fetchOptimal(newval);
                            } else {
                                setError("Number is out of range.")
                            }
                        }}
                    />
                </label>
            </div>
            <Chart/>
        </div>
    );

}