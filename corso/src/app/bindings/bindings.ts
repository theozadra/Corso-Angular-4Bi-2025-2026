import { Component, signal, WritableSignal } from '@angular/core';

@Component({
	selector: 'app-bindings',
	imports: [],
	templateUrl: './bindings.html',
	styleUrls: ['./bindings.css']
})
export class Bindings {

	//Dichiaro il signal writable
	studente: WritableSignal<string> = signal('Theo Zadra');
	contatore: WritableSignal<number> = signal(0);
	nomeImmagine: WritableSignal<string> = signal('/bicicletta.jpg');
	indiceImmagine: WritableSignal<number> = signal(0);

	classeTitolo: string = "display-1";

	immagini: string[] = ['/bicicletta.jpg', '/ciao.jpg', '/cinquecento.jpg', '/aereo.jpg'];
	colori: string[] = ['red', 'green', 'blue', 'yellow'];


	// Aggiungo il metodo cambia nome
	cambiaNome(): void {
		this.studente.set('Luca Boschi');
	}

	incrementa(): void{
		//Il metodo deve aumentare di 1 il valore di contatore.
		// 1. Primo sistema: non consigliato
		//this.contatore.set(this.contatore() + 1);
		// 2. sistema più usato: Si tratta di un espressione lamba, a sinistra dell'uguale dichiaro una variabile
		// che verrà inizializzata con il valore corrente gestito da signal
		// a destra del > scrivo l'istruzione che mi consente di calcolare il nuovo valore
		this.contatore.update(valoreAttuale => valoreAttuale + 1);
		// La funziona LAMBDA può prevedere anche un blocco d'istruzioni.
		// Nel blocco deve essere presente l'istruzione return, che restituirà il nuovo valore per il signal

	}
	decrementa(): void{
		this.contatore.update(valoreAttuale => valoreAttuale - 1);

	}
	prev(): void{
		if (this.indiceImmagine() > 0) {
			this.indiceImmagine.update(valoreCorrente => valoreCorrente -1);
		}
		else {
			this.indiceImmagine.set(this.immagini.length -1)
		}
	}

	next(): void {
		if(this.indiceImmagine() == this.immagini.length -1) {
			this.indiceImmagine.set(0);
		}
		else {
			this.indiceImmagine.update(valoreAttuale => valoreAttuale + 1);
		}
		// L'if può essere sostituito dalla seguente istruzione:
		// this.indiceImmagine.update(valoreAttuale => (valoreAttuale + 1) % this.immagini.length);
	}
}
