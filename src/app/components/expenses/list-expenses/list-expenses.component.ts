import { Component } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})
export class ListExpensesComponent {
  budget: number = 0;
  reset: number = 0;

  constructor(private budgetService: BudgetService) {
    this.budget = this.budgetService.budget;
    this.reset = this.budgetService.reset;
  }

}
