import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/services/data.service';
import {ICustomersOrderList, INewOrder} from '../shared/interfaces';
import {GrowlerMessageType, GrowlerService} from '../core/growler/growler.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cm-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  allCustomers: ICustomersOrderList[];

  constructor(private dataService: DataService,
              private router: Router,
              private growler: GrowlerService) { }

  ngOnInit(): void {
    this.getCustomerData();
  }

  getCustomerData() {
    this.dataService.getCustomers().subscribe(res => {
      this.allCustomers = res.map(item => ({
          fullName: `${item.firstName} ${item.lastName}`,
          id: item.id
        })
      );
    });
  }

  sendOrder(order: INewOrder) {
    this.dataService.insertOrder(order.items, order.id).subscribe(res => {
      this.handleResponse(res.status);
    });
  }

  handleResponse(status) {
    let message = '';
    let type;
    if (status) {
      message = 'Operation performed successfully.';
      type = GrowlerMessageType.Success;
      this.router.navigate(['/orders']);
    } else {
      message = 'Operation failed.';
      type = GrowlerMessageType.Danger;
    }
    this.showMessage(message, type);
  }

  showMessage(message, type) {
    this.growler.growl(message, type);
  }

}

