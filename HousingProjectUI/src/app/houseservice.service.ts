import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from './house';

@Injectable({
  providedIn: 'root'
})
export class HouseserviceService {


baseApiUrl:string="https://localhost:7090";
  constructor(private http:HttpClient) { }

  getAllHouses():Observable<House[]>
  {
    return this.http.get<House[]>(this.baseApiUrl+'/api/Books')

  }
  addHousing(addHousingRequest:House):Observable<House[]>
  {
  
    return this.http.post<House[]>(this.baseApiUrl+'/api/Books/InsertBook',addHousingRequest);

  }

  getHouseById(id:number):Observable<House>
  {
     return this.http.get<House>(this.baseApiUrl+'/api/Books/'+id);
  }

  updateHousingDetails(id:number,updateHouseDet:House):Observable<House[]>
  {
      return this.http.put<House[]>(this.baseApiUrl+'/api/Books/'+id,updateHouseDet);
  }
  deleteHousing(bookID:number):Observable<House>
  {
    return this.http.delete<House>(this.baseApiUrl+'/api/Books/'+bookID);
  }
}

 