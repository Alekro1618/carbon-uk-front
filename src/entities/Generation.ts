export interface Generation {
    fuel : string,
    perc : number
}

export interface GenerationStamp {
    from : string,
    to : string
    generationmix : Generation[]
}