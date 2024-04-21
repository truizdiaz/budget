import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrl: './enter-budget.component.scss'
})
export class EnterBudgetComponent {
  amount: number = 0;
  incorrectAmount: boolean = false;

  constructor(private router: Router, private budgetService: BudgetService) {

  }

  addBudget() {
    if(this.amount > 0) {
      this.budgetService.budget = this.amount;
      this.budgetService.reset = this.amount;
      this.router.navigate(['/expenses'])
    } else {
      this.incorrectAmount = true;
    }
  }
}
