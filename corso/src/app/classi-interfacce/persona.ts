export class Persona {

    // Attributi
    private _nome: string ;
    private _cognome: string;
    private _sesso: string;

    // Costruttore
    constructor(nome: string, cognome: string, sesso: string) {
        this._nome = nome;
        this._cognome = cognome;
        this._sesso = sesso;        
    }

    // Getter
    public get nome(): string {
        return this._nome;
    }
    public get cognome(): string {
        return this._cognome;
    }
    public get sesso(): string {
        return this._sesso;
    }

    // Setter
    public set nome(value: string) {
        this._nome = value;
    }
    public set cognome(value: string) {
        this._cognome = value;
    }
    public set sesso(value: string) {
        this._sesso = value;
    }

    // Un getter non restituisce necessariamente il valore di un attributo
    public get nomeCompleto(): string {
        return this.nome + ' ' + this.cognome;
    }
    
    // Metodi
    public toString(): string {
        return this.nome + ' ' + this.cognome + this.sesso;
    }
}
