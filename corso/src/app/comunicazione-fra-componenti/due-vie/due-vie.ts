import { Component, model, ModelFunction } from '@angular/core';

@Component({
  selector: 'app-due-vie',
  imports: [],
  templateUrl: './due-vie.html',
  styleUrl: './due-vie.css'
})
export class DueVie {

  colore = model.required<string>();
  
  cambiaColore(nuovoColore: string) {
    this.colore.set(nuovoColore);
  }
}
