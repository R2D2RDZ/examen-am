import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  idProducto: number;
  producto: Producto;

  constructor(private productoService:ProductoService, private activateRouter:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap=>{
      this.idProducto = Number.parseInt(paramMap.get('idProducto') as string);
      let product = this.productoService.getProducto(this.idProducto);
    if (product){
      this.producto = product;
      
    }
    console.log(product)
    });
  }

}
