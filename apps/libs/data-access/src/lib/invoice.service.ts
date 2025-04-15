import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '@org/core';



@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('assets/data.json');
  }
}
