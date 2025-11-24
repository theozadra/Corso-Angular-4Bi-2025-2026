// Un'interfaccia viene usata per definire:
// - quali metodi una classe che implementa l'interfaccia stessa deve avere
// - quali devono essere gli attributi di un oggetto generico per soddisfare
//   i requisiti previsti dall'interfaccia
export interface IDocente {
    id: number;
    nome: string;
    cognome: string;
    materie: string[];
    classi: string[];
}
