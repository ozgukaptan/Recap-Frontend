import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44352/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbycolor?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCar(id:number):Observable<ItemResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbyid?id="+id;
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
  }

}
