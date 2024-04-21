import { Component, OnDestroy } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Subscription } from 'rxjs';
import { Expense } from '../../../interfaces/expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})
export class ListExpensesComponent implements OnDestroy {
  budget: number = 0;
  rest: number = 0;
  listExpenses: Expense[] = [];

  sub: Subscription;

  constructor(private budgetService: BudgetService) {
    this.budget = this.budgetService.budget;
    this.rest = this.budgetService.reset;
    this.sub = this.budgetService.getExpense().subscribe(expense => {
      this.rest = this.rest - expense.amount;
      this.listExpenses.push(expense)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
