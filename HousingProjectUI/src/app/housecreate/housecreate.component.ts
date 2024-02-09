import { Component, OnInit } from '@angular/core';
import { HouseserviceService } from '../houseservice.service';
import { Router } from '@angular/router';
import { House } from '../house';

@Component({
  selector: 'app-housecreate',
  templateUrl: './housecreate.component.html',
  styleUrl: './housecreate.component.css'
})
export class HousecreateComponent implements OnInit {

  
  addHousingRequest:House={
    bookID:0,
    title:'',
    author:'',
    publisher:'',
    bookType:'',
    publisheddate:new Date(),
    releaseddate:new Date(),
    price:0,
    stock:0,
    sold:0
  };

constructor(private houseService:HouseserviceService,private router:Router){}

  ngOnInit(): void {
  
}
createHouse()
{
  this.houseService.addHousing(this.addHousingRequest)
  .subscribe({
    next:(house)=>
    {
      this.router.navigate(['hlist']);
      console.log(house);
    },
    error:(response)=>
    {
      console.log(response);
    }
  })
}
}
