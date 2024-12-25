import { Component } from '@angular/core';
import {ExpenseService} from "../../services/expense.service";
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    DatePipe,
    CurrencyPipe,
    NgIf
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent {
  expenses = this.expenseService.expenses.asReadonly();
  constructor(private expenseService:ExpenseService) {
  }

  protected readonly Math = Math;

  onClick(id: number) {
    this.expenseService.removeExpense(id);
  }
}
