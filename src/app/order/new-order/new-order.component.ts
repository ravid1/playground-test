import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomersOrderList, INewOrder} from '../../shared/interfaces';

@Component({
  selector: 'cm-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  productForm: FormGroup;
  private _customers: ICustomersOrderList[];
  @Output() sendOrder: EventEmitter<INewOrder> = new EventEmitter<INewOrder>();
  @Input() set customers(customersList: ICustomersOrderList[]) {
    if (customersList && customersList.length) {
      this.setInitialCustomer(customersList);
    }
    this._customers = customersList;
  }

  get customers() {
    return this._customers;
  }

  get productsFormArray(): FormArray {
    return this.productForm.get('items') as FormArray;
  }

  get totalPrice() {
    const total = this.productsFormArray.controls.reduce((acc, control) => acc + (+control.value.price), 0);
    return (total || 0) ;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.productForm = this.fb.group({
      customer: ['', Validators.required],
      items: this.fb.array([])
    });
    this.addRow();
  }

  private setInitialCustomer(customersList: ICustomersOrderList[]) {
    this.productForm.get('customer').setValue(customersList[0]);
  }

  createProductRow(): FormGroup {
    return this.fb.group({
      productName: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  addRow() {
    this.productsFormArray.push(this.createProductRow());
  }

  removeRow(index: number) {
    this.productsFormArray.removeAt(index);
  }

  submit() {
    const id = this.customers.find(customer => customer.fullName === this.productForm.value.customer.fullName).id;
    const items = [...this.productForm.value.items];
    this.sendOrder.emit({id, items});
  }

}
