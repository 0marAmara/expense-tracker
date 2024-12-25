import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../services/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExpenseModel} from "../models/expense.model";
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {
  id: number | undefined;
  expense: ExpenseModel | undefined;

  constructor(private expenseService: ExpenseService, private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const {id} = params;
      this.id = +id!;
      this.expense = this.expenseService.expenses()[this.id - 1];

    })
  }

  onClick(id: number) {
    this.expenseService.removeExpense(id);
    this.router.navigate(['/']);
  }
}
