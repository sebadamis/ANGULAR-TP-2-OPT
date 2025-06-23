import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {   
        path: "home",
        component: HomeComponent
    },
    {   
        path: "**",
        component: HomeComponent
    },
    {   
        path: "catalogo",
        component: CatalogoComponent
    },
    {   
        path: "detalle",
        component: DetalleComponent
    },
    {   
        path: "login",
        component: LoginComponent
    },
    {   
        path: "registro",
        component: RegistroComponent
    },
];
