import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  public budget: number = 0;
  public reset: number = 0;

  constructor() { }
}
