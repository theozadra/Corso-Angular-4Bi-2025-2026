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
		// 2. sistema più usato:
		this.contatore.update(valoreAttuale => valoreAttuale + 1);

	}
}
