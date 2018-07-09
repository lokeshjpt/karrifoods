import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
  qty: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns = ['item', 'qty', 'cost'];
  transactions: Transaction[] = [
    {item: 'Chicken Biryani', qty: 1, cost: 9.99},
    {item: 'Goat Biryani', qty: 1, cost: 9.99},
    {item: 'Veg Biryani', qty: 1, cost: 9.99},
  ];

  constructor() { }

  ngOnInit() {
  }


  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
