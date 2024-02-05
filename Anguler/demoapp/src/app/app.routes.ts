import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { MainComponent } from './Component/main/main.component';
import { HeaderComponent } from './Component/header/header.component';

export const routes: Routes = [
    {path:'Home' , component:MainComponent},
    {path:'header' , component:HeaderComponent}

    
];
