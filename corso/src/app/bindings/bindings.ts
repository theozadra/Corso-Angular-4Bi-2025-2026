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


	// Aggiungo il metodo cambia nome
	cambiaNome(): void {
		this.studente.set('Luca Boschi');
	}

	incrementa(): void{
		//Il metodo deve aumentare di 1 il valore di contatore.
		// 1. Primo sistema: non consigliato
		this.contatore.set(this.contatore() + 1);
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
}
