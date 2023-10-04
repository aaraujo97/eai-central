import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilitatorService {

  private currentPage = new BehaviorSubject<string>('');
  currentPage$ = this.currentPage.asObservable();
  constructor() { }

  public setPage(page: string)
  {
    this.currentPage.next(page);
  }

  public getCurrentPage(): Observable<string> {
      return this.currentPage$;
  }


}
