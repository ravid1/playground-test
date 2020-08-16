import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {OrderRoutingModule} from './order-routing.module';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {NewOrderComponent} from './new-order/new-order.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { ErrorMsgHandlerComponent } from './new-order/error-msg-handler/error-msg-handler.component';


@NgModule({
  declarations: [OrderComponent, NewOrderComponent, ErrorMsgHandlerComponent],
  imports: [
    CommonModule, SharedModule, OrderRoutingModule, AutoCompleteModule, ReactiveFormsModule, DropdownModule
  ]
})
export class OrderModule {
}
