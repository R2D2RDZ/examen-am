import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:Producto[] =[{id:1,descripcion:"a",sku:"a",categoria:"a"}];

  constructor() { }

  public getProductos(){
    return this.productos;
  }

  public getProducto(id:number){
    console.log(id);
    return this.productos[id-1];
  }

  public addProducto(producto: Producto){
    console.log(producto);
    producto.id = this.productos.length+1;
    this.productos.push(producto);
    console.log(this.productos);
  }

  public setProducto(id:number, cate:string, desc:string, sku:string){
    let product = this.getProducto(id);
    if (product){
      product.categoria = cate;
      product.descripcion = desc;
      product.sku = sku;
    }
  }

  public delProducto(id:number){
    this.productos = this.productos.filter(product => product.id != id);
  }
}
