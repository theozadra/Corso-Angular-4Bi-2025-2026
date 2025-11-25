import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NavBar],
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
