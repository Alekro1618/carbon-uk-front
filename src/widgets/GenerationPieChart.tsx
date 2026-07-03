import { PieChart } from "react-minimal-pie-chart";
import type { Generation, GenerationStamp } from "../entities/Generation";
import type { BaseDataEntry } from "react-minimal-pie-chart/dist/commonTypes";

interface GenerationPieChartProps {
    generationStamp: GenerationStamp;
}

const colorMap : Record<string, string> = {
  gas: "#f97316",
  coal: "#4b5563",
  biomass: "#84cc16",
  nuclear: "#a855f7",
  hydro: "#0ea5e9",
  imports: "#94a3b8",
  other: "#d1d5db",
  wind: "#22c55e",
  solar: "#eab308",
};

function toBaseDataEntry(generation : Generation): BaseDataEntry {
    return {
        title: generation.fuel,
        color: colorMap[generation.fuel],
        value: generation.perc
    };
}

export function GenerationPieChart({ generationStamp }: GenerationPieChartProps) {
    return (
        <PieChart 
            data={ generationStamp.generationmix.map(toBaseDataEntry) }
            label={({ dataEntry }) =>  {
                if (dataEntry.value > 1.0) {
                    return `${dataEntry.title} ${Math.trunc(dataEntry.value)}%`
                } else {
                    return ``
                }
            }}
            labelStyle={{
                fontSize: "5px",
                fill: "#fff",
            }}
            labelPosition={70}
        />
    );
}

