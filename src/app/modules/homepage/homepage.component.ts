import { Component } from '@angular/core';

interface Product {
  image: string;
  name: string;
  category: string;
  price: number;
  inventoryStatus: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  mockedProducts: Product[] = [
    {
      image: 'product1.jpg',
      name: 'Mocked Product 1',
      category: 'Electronics',
      price: 199.99,
      inventoryStatus: 'In Stock'
    },
    {
      image: 'product2.jpg',
      name: 'Mocked Product 2',
      category: 'Clothing',
      price: 49.99,
      inventoryStatus: 'Out of Stock'
    },
    {
      image: 'product2.jpg',
      name: 'Mocked Product 2',
      category: 'Clothing',
      price: 49.99,
      inventoryStatus: 'Out of Stock'
    },
    {
      image: 'product2.jpg',
      name: 'Mocked Product 2',
      category: 'Clothing',
      price: 49.99,
      inventoryStatus: 'Out of Stock'
    },
    {
      image: 'product2.jpg',
      name: 'Mocked Product 2',
      category: 'Clothing',
      price: 49.99,
      inventoryStatus: 'Out of Stock'
    },
    {
      image: 'product2.jpg',
      name: 'Mocked Product 2',
      category: 'Clothing',
      price: 49.99,
      inventoryStatus: 'Out of Stock'
    },
    {
      image: 'product2.jpg',
      name: 'Mocked Product 2',
      category: 'Clothing',
      price: 49.99,
      inventoryStatus: 'Out of Stock'
    },
    
  ];

  getSeverity(status: string): string {
    // Implement your severity logic here based on inventory status
    return 'info';
  }
}


