import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productos: Producto[];
  selectedCat: string;
  selectedSKU: string;
  selectedDes: string;


  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  Agregar(){
    let producto = {id: 0, categoria: this.selectedCat, sku:this.selectedSKU, descripcion: this.selectedDes};
    this.productoService.addProducto(producto);
  }

  Modificar(id:number ){
    console.log(id);
  }

}
