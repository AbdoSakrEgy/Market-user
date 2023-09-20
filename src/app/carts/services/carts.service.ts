import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  baseURL = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}
  addNewCart(model: any) {
    return this.http.post(this.baseURL + 'carts', model);
  }
}
