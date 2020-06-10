import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articulo = {
    codigo : null,
    descripcion: null,
    precio: null
  }

  articulos = [{codigo:1, descripcion: 'papas', precio: 10.55},
               {codigo:2, descripcion: 'manzanas', precio: 12.10},
               {codigo:3, descripcion: 'melon', precio: 52.30},
               {codigo:4, descripcion: 'cebollas', precio: 17},
               {codigo:5, descripcion: 'calabaza', precio: 20}]

  borrar(art) {
    for (let i = 1; i <= this.articulos.length; i++) {
      if(this.articulos[i].codigo == art.codigo) {
        this.articulos.splice(i, 1);
        return;
      }
    }
  }

  seleccionar(art) {
    this.articulo.codigo = art.codigo;
    this.articulo.descripcion = art.descripcion;
    this.articulo.precio = art.precio;
  }

  agregar() {
    for(let i = 0; i<this.articulos.length; i++) {
      if(this.articulos[i].codigo == this.articulo.codigo) {
        alert("Ya existe un articulo con dicho codigo");
        return;
      }
    }
    this.articulos.push({codigo: this.articulo.codigo,
                         descripcion: this.articulo.descripcion,
                         precio: this.articulo.precio});
    this.limpiar();
  }

  limpiar() {
    this.articulo.codigo = null;
    this.articulo.descripcion = null;
    this.articulo.precio = null;
  }

  modificar() {
    for(let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codigo == this.articulo.codigo) {
        this.articulos[i].descripcion = this.articulo.descripcion;
        this.articulos[i].precio = this.articulo.precio;
        return;
      }
    }
    alert("No existe el codigo del articulo ingresado");
    this.limpiar();
  }

  hayRegistros() {
    return this.articulos.length > 0;
  }
  
}
