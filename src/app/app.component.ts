import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CatalogoComponent, DetalleComponent, LoginComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULAR-UTN-TP-2-OPT';
}
