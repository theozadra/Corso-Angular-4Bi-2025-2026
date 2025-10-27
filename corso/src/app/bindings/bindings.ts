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
}
