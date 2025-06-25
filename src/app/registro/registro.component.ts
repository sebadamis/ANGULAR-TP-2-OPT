import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  id: number,
  nombre: string,
  apellido: string,
  telefono: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class Registro {
  usuarios : Usuario[] = []

  submitForm(){
    console.log(this.formState)
    this.usuarios.push({
      nombre: this.formState.nombre,
      apellido: this.formState.apellido,
      telefono: this.formState.telefono,
      email: this.formState.email,
      password: this.formState.password,
      id: this.formState.id + 1
    })
    // this.formState.nombre = "",
    // this.formState.apellido = "",
    // this.formState.telefono = "",
    // this.formState.email = "",
    // this.formState.password = "",
    // this.formState.id = 0
  }
  formState = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
    id: 0
  }
}
