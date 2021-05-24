import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../../../providers/products/products.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  error: string;
  products: Product[];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProduct().subscribe(response => {
      this.products = response.data;
      console.log(this.products);
    }, error => {
      this.error = error;
    });
  }

}
