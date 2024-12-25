import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AddExpenseComponent} from "./add-expense/add-expense.component";
import {ExpenseComponent} from "./expense/expense.component";
import {AuthGuardService} from "../services/auth-guard.service";
import {CanDeactivateGuard} from "./add-expense/can-deactivate-guard.service";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-expense', canActivate: [AuthGuardService], canDeactivate:[CanDeactivateGuard] ,component: AddExpenseComponent},
  {path: 'expense/:id', component: ExpenseComponent}
]
