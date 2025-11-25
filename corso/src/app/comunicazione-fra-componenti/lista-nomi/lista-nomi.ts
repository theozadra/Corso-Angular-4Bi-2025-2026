import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-lista-nomi',
  imports: [],
  templateUrl: './lista-nomi.html',
  styleUrl: './lista-nomi.css'
})
export class ListaNomi {
  nomi: InputSignal<string[]> = input.required<string[]>();
}
