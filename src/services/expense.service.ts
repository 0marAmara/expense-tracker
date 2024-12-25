import {Injectable, signal} from "@angular/core";
import {ExpenseModel} from "../app/models/expense.model";

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  expenses = signal<ExpenseModel[]>([{
    id:1,
    date:Date.now(),
    amount:22,
    category:"food"
  }]);

  addExpense(expense: ExpenseModel) {
    expense.id=this.expenses().length;
    this.expenses.update(prevExpense=>[...prevExpense, expense]);
  }
  removeExpense(id:number) {
    this.expenses.update(prevExpense=>{
      return [...prevExpense.filter(x=>x.id!==id)];
    })
  }

}
