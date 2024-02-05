import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { appConfig } from '../../app.config';
import { CommonModule } from '@angular/common';
import { User } from '../../DataStore/Models/user';
import { Category } from '../../DataStore/Models/category';
import { ProductList } from '../../DataStore/Models/product-list';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  prolist: ProductList[];
  catlist: Category[];
  totalprice: number;
  selectCategory: string="";

  constructor(){
    this.totalprice=0;
    this.prolist=[
      {id:1, name:"Tennis Ball", Quantity:10, price:10, imgurl:"../../../assets/images/tennes.jpg", catId:1},
      {id:2, name:"Foot Ball", Quantity:5, price:35, imgurl:"../../../assets/images/Foot.jpg", catId:1},
      {id:3, name:"camp tent", Quantity:3, price:250, imgurl:"../../../assets/images/tent.jpg", catId:2},
    ]
    this.catlist=[
      {id:1, name:"sport"},
      {id:2, name:"Summer"},
      
    ]
  }

  TotalPrice(price:number , quantity:string){
    let qyt: number = parseInt(quantity);

    this.totalprice += price * qyt;
  }

  

  // UserValue : User ;
  // constructor(){
  //   this.UserValue = new User("Asma Alharrasi" , 22, "Female" , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat.",['react' , "angular" , ".Net" , "php" ,"python"] ) ;
  // }
}
