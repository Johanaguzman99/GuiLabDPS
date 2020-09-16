import { Component, OnInit } from '@angular/core';
import {Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
listaAlumnos: Product[];

  constructor(public servicioAlumnos: ProductService,
  private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.servicioAlumnos.obtenerAlumnos()
    .snapshotChanges().subscribe(item => {
      this.listaAlumnos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listaAlumnos.push(x as Product);
      });
    });

  }
  onEdit(product: Product) {
    this.servicioAlumnos.alumnoSeleccionado = Object.assign({}, product);
  }

  onDelete($key: string) {
    if (confirm('¿Esta seguro de eliminar este elemento?')) {
      this.servicioAlumnos.eliminarAlumno($key);
      this.toastr.warning('Borrado Exitoso', 'Alumno eliminado');
    }
  }

}
