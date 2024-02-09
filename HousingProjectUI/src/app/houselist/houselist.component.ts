import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseserviceService } from '../houseservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrl: './houselist.component.css'
})
export class HouselistComponent implements OnInit{

  houses:House[]=[];
  constructor(private houseService:HouseserviceService,private router:Router){}
  ngOnInit(): void { 
    this.houseService.getAllHouses()
    .subscribe({
      next:(houses)=>
      {
        this.houses=houses;
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }
  deleteHouse(bookID:number)
  {
    this.houseService.deleteHousing(bookID)
    .subscribe({
      next:(response)=>
      {
        this.router.navigate(['hlist']);
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }
}
