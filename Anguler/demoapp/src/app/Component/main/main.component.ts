import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { appConfig } from '../../app.config';
import { CommonModule } from '@angular/common';
import { User } from '../../DataStore/user';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  UserValue : User ;
  constructor(){
    this.UserValue = new User("Asma Alharrasi" , 22, "Female" , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat.",['react' , "angular" , ".Net" , "php" ,"python"] ) ;
  }
}
