import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  
  constructor(private route:ActivatedRoute , private productService: ProductService ,private router: Router){}

  product_id!:any;
  product:any={};

  async ngOnInit(): Promise<void> {
    
    this.product_id = this.route.snapshot.paramMap.get('product_id');
    console.log(this.product_id);
    
    (await this.productService.getProductById(this.product_id)).subscribe((res: any) => {
      this.product = res;
    },
  );
  }



}
