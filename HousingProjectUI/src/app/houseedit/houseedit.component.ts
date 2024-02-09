import { Component, OnInit } from '@angular/core';
import { HouseserviceService } from '../houseservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from '../house';

@Component({
  selector: 'app-houseedit',
  templateUrl: './houseedit.component.html',
  styleUrl: './houseedit.component.css'
})
export class HouseeditComponent implements OnInit {

editBookDetails:House={
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

constructor(private houseService:HouseserviceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
   this.route.paramMap.subscribe({
    next:(params)=>
    {
      const bookID=params.get('bookID');
      if(bookID)
      {
        this.houseService.getHouseById(Number(bookID))
        .subscribe({
          next:(response)=>{
            this.editBookDetails=response;
          }
        })
      }
      
    }
   })
  }

  updateHouse()
  {
    this.houseService.updateHousingDetails(Number(this.editBookDetails.bookID),this.editBookDetails)
    .subscribe({
      next:(response)=>
      {
        this.router.navigate(['hlist']);
        console.log(response);
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }
}
