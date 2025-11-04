import { Component, signal, WritableSignal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-direttive-strutturali',
  imports: [],
  templateUrl: './direttive-strutturali.html',
  styleUrl: './direttive-strutturali.css'
})
export class DirettiveStrutturali {
  visualizzaBanner: WritableSignal<boolean> = signal(false);

  toggleBanner(): void {
    // Visualizza il banner
    this.visualizzaBanner.set(true);
    let conta = timer(3000).subscribe(() => {
      this.visualizzaBanner.set(false);
    })

  }
}
