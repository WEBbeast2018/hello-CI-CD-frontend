import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotesUrl = '/quote';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getQuote(): Observable<any> {
    return this.http.get<any>(this.quotesUrl);
  }
}
