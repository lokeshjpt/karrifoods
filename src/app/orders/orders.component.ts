import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
  qty: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns = ['item', 'qty', 'cost'];
  transactions: Transaction[] = [
    {item: 'Chicken Biryani', qty: 1, cost: 9.99},
    {item: 'Goat Biryani', qty: 1, cost: 9.99},
    {item: 'Veg Biryani', qty: 1, cost: 9.99},
  ];


  constructor() { }

  ngOnInit() {
  }

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
