import { Component } from '@angular/core';
import { CompartilharInputComponent } from '../compartilhar-input/compartilhar-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorador-input',
  standalone: true,
  imports: [CompartilharInputComponent, CommonModule],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})
export class DecoradorInputComponent {
  nome:string = "Matheus Pazikas"
  frutas = ["Maçã", "Banana", "Abacaxi"]

  cadastro = [
    // Lista Pessoas
    {nome: "Matheus", idade: 19, email: "pazis@dickcock.com"},
    {nome: "Marcelo", idade: 19, email: "celo@dickcock.com"},
    {nome: "Miguel", idade: 19, email: "miii@dickcock.com"}
  ]
}
