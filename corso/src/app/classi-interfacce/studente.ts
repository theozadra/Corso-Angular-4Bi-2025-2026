import { Persona } from "./persona";

export class Studente extends Persona{
    // Attributi
    private _id: number;
    private _classe: string = '';

    // Costruttore
    constructor(id: number, nome: string, cognome: string, sesso: string, classe: string) {
        // Richiamo il costruttore della classe padre
        super(nome, cognome, sesso);
        // Adesso abbiamo una persona, caratterizziamo lo studente
        this._id = id;
        // Non ho il controllo di come è stata scritta la classe
        //this._classe = classe;
        // Nel caso sotto uso il setter. In Typescript il setter viene utilizzato come se
        // fosse un attributo.
        this.classe = classe;
    }

    // Getter di studente
    public get id(): number {
        return this._id;
    }

    public get classe(): string {
        return this._classe;
    }

    // Setter

    public set classe(value: string) {
        // Controlliamo se la classe è scritta in modo corretto
        // Usiamo le espressioni regex

        const regex = /^[1-5][A-S][aeim]?$/;

        if(regex.test(value)) {
            this._classe = value;
        }
        else {
            throw new Error('Nome della classe non corretto.');
        }        
    }

    public get toRow(): string {
        return `<tr><td class="row">${this.id}</td><td>${this.nome}</td><td>${this.cognome}</td>
                <td>${this.sesso}</td><td>${this.classe}</td></tr>`;
    }

    public override toString(): string {
        return this.id + ' ' + super.toString() + ' ' + this.classe;
    }

    

}
