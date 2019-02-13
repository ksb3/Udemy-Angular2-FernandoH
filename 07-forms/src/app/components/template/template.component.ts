import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: 'xx',
    apellido: 'xxxx',
    correo: 'email@email.com',
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('Formulario enviado');
    console.log('NgForm' + forma);
    console.log(forma.value);
  }

}
