import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TableRow } from '../table/table';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  toggleSideBar = false;
  cartWatches: any[] = [];
  cartPrice: number = 0;

  public tableDataUrl = "api/table/table.json"; 

  constructor(public http: HttpClient) { }

  getTableData(): Observable<TableRow[]> {
    return this.http.get<TableRow[]>(this.tableDataUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error ocured: ${err.error.message}`
    } else {
        errorMessage = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
