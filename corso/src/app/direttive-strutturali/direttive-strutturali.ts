import { Component, signal, WritableSignal } from '@angular/core';
import { getCurrentInjector } from '@angular/core/primitives/di';
import { timer } from 'rxjs';

@Component({
  selector: 'app-direttive-strutturali',
  imports: [],
  templateUrl: './direttive-strutturali.html',
  styleUrl: './direttive-strutturali.css'
})
export class DirettiveStrutturali {
  visualizzaBanner: WritableSignal<boolean> = signal(false);
  visualizzaImmagineOTesto: WritableSignal<string> = signal('immagine');
  nomi: WritableSignal<string[]> = signal(['Andrea', 'Luca', 'Matteo']);
  indiceModifica: WritableSignal<number> = signal(-1);

  toggleBanner(): void {
    // Visualizza il banner
    this.visualizzaBanner.set(true);
    let conta = timer(3000).subscribe(() => {
      this.visualizzaBanner.set(false);
    })
  }

  immagineOTesto(): void {
    if(this.visualizzaImmagineOTesto() == 'immagine') {
      this.visualizzaImmagineOTesto.set('testo');
    }
    else {
      this.visualizzaImmagineOTesto.set('immagine');
    }
  }

  aggiungiNome(nome: any): void {
    //console.log(nome.value);
    this.nomi.update(current => [...current, nome.value]);
    //let x = ['Andrea', 'Luca', 'Matteo', 'Pippo'];
    //let x = [...this.nomi(), 'Pippo'];
    // this.nomi.set([...this.nomi(), 'Pippo']);
  }

  elimina(indice: number): void {
    // Eliminare un elemento in posizione i-esima da un vettore?
    // let v = [1,2,3];
    this.nomi.update(current => {
      current.splice(indice, 1);
      return [...current];
    })
  }
}
