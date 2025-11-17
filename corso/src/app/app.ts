import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bindings } from './bindings/bindings';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';
import { DirettiveStrutturali } from './direttive-strutturali/direttive-strutturali';
import { ClassiInterfacce } from './classi-interfacce/classi-interfacce';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bindings, Header, Footer, NavBar, DirettiveStrutturali, ClassiInterfacce],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // title è un attributo della classe App
  // In typescript una variabile si dichiara scrivendo nome: tipo
  // Posso assegnare direttamente un valore con nome: tipo = valore
  protected readonly title: WritableSignal<string> = signal<string>('Corso angular 4Bi 2025/2026');
  numero: number = 5;  

}
