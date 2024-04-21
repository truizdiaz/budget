import { Component } from '@angular/core';
import { Expense } from '../../../interfaces/expense';
import { BudgetService } from '../../../services/budget.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  name: string = '';
  amount: number = 0;
  textInvalidForm: string = 'INCORRECT EXPENSE OR AMOUNT'

  formInvalid: boolean = false;

  constructor(private budgetService: BudgetService) {

  }

  addExpense() {
    // Validations

    if(this.amount > this.budgetService.rest) {
      this.textInvalidForm = 'THE AMOUNT IS HIGER THAN THE REST';
      this.formInvalid = true;
      return;
    }

    if (this.name === '' || this.amount <= 0) {
      this.formInvalid = true
    } else {
      // Create the object
      const expense: Expense = {
        name: this.name,
        amount: this.amount
      }

      // Send data using Observables
      this.budgetService.addExpense(expense);

      // Reset the form
      this.formInvalid = false;
      this.name = '';
      this.amount = 0;
    }


  }
}
