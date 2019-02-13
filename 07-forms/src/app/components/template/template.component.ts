import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border:1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: null,
    sexo: "Hombre",
    acepta: false,
  };

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "EH",
    nombre: "Euskal Herria"
  },
];

sexos: string [] = ["Hombre", "Mujer"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('NgForm' + forma);
    console.log('Valor de forma:' + forma.value);
    console.log('Usuario' + this.usuario);
  }

}
