export function format(iso : string) : string {
    const date = new Date(iso);
    return date.getDate().toString().padStart(2, "0") + "." +
    (date.getMonth() + 1).toString().padStart(2, "0") + "." +
    date.getFullYear() + " " +
    date.getHours().toString().padStart(2, "0") + ":" +
    date.getMinutes().toString().padStart(2, "0");
}

export function ParseInt(text : string) : number | null{
    let result = parseInt(text);
    
    return isNaN(result) ? null : result;
}