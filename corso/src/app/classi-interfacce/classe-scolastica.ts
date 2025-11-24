import { Studente } from "./studente";

export class ClasseScolastica{
    private _nome: string = '';
    private _annoScolastico: string = '';
    private _studenti: Studente[] = [];

    constructor(nome: string, annoScolastico: string) {
        this.nome = nome;
        this.annoScolastico = annoScolastico;
    }

    public get nome(): string {
        return this._nome;
    }
    public get annoScolastico(): string {
        return this._annoScolastico;
    }
    public get studenti(): Studente[] {
        return this._studenti;
    }

    public set nome(value: string) {     
        // Controlliamo se la classe è scritta in modo corretto
        // Usiamo le espressioni regex

        const regex = /^[1-5][A-S][aeim]?$/;

        if(regex.test(value)) {
            this._nome = value;
        }
        else {
            throw new Error('Nome della classe non corretto.');
        }            
    }

    public set annoScolastico(value: string) {
        const regex = /^20\d{2}\/20\d{2}$/;
        if (regex.test(value)) {
            this._annoScolastico = value;
        }
        else {
            throw new Error('Formato anno scolastico non corretto.')
        }
    }

    public get toTable(): string {
        return `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Classe</th>
                    </tr>
                </thead>
                <tbody>
                    ${this._studenti.map(studente => studente.toRow).toString()}
                </tbody>
            </table>`
    }

    public aggiungiStudente(studente: Studente): void {
        this._studenti.push(studente);
    }

    public eliminaStudente(indice: number): void {
        this._studenti.splice(indice, 1);
    }

    public modificaStudente(indice: number, studente: Studente) {
        try {
            this._studenti[indice] = studente;
        } catch (error) {
            throw new Error('Indice fuori range.');
        }
    }
    
}
