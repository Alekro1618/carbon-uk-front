import type { GenerationStamp } from "../entities/Generation";

const clearGenerators = ["biomass", "nuclear", "hydro", "wind", "solar"];

export function clearEnergy(stamp : GenerationStamp): number {
    return Math.trunc(stamp.generationmix
        .filter(generator => clearGenerators.includes(generator.fuel))
        .map(generator => generator.perc)
        .reduce((acc, a) => acc += a, 0.0))
}