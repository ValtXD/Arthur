import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  title = 'Minha Aplicação Angular';
  user = {
    name: 'João',
    age: 30
  };
}
*/
export class AppComponent{
  title = "Arthuria a mais linda de FATE"
  user = {
    name: "Arthuria Pendragon",
    sex: "Feminino",
    card: "Saber",
    title_1: "Rainha dos Cavaleiros",
    title_2: "Portadora da Espada Lendária",
    work: "FATE series",
    age: 24,
    classification: "Espirito Heroico e Servo",
    height: "154cm",
    weight: "42kg",
    objectives: "Vencer a Guerra do Santo Graal; " +
      "Proteger Shirou/Kiritsugu; " +
      "Reviver seu reino e lhe dar um final diferente."

  }
  imageUrl = "https://wallpapers.com/images/hd/fate-series-lyuld2tiaf363s3s.jpg"
}
