import {Component, inject, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ExpenseService} from "../../services/expense.service";
import {ExpenseModel} from "../models/expense.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})

export class AddExpenseComponent implements CanComponentDeactivate{
  router = inject(Router);
  route = inject(ActivatedRoute);

  enteredDate = signal<string>("");
  enteredAmount = signal<number>(0);
  enteredCategory = signal<string>("");
  enteredDescription = signal<string>("");
  hasSaved: boolean = false;

  error = "";

  constructor(private expenseService: ExpenseService) {
  }
  canDeactivate(){
    if(this.enteredCategory()===""&&!this.hasSaved)
      return true;
    return this.hasSaved;
  }

  onSubmit() {
    this.error = "";
    if (this.enteredDate() == "") {
      this.error = "Please enter a date";
    }
    if (this.enteredAmount() == 0) {
      this.error = "Please enter an amount";
    }
    if (this.enteredCategory().trim() == "") {
      this.error = "Please enter a category";
    }
    if (this.error !== "") {
      return;
    }
    const newExpense: ExpenseModel = {
      date: Date.parse(this.enteredDate()),
      amount: this.enteredAmount(),
      category: this.enteredCategory(),
      description: this.enteredDescription()
    }

    this.expenseService.addExpense(newExpense);
    this.hasSaved = true;

    this.router.navigate(['/'], {relativeTo: this.route});

  }
}
