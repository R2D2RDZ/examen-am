import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:Producto[];
  pro:Producto;

  constructor() { }

  public getProductos(){
    return this.productos;
  }

  public getProducto(ids:number){
    return this.productos.find(({ id }) => id === ids);
  }

  public addProducto(producto: Producto){
    console.log(producto);
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
