import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
// Class
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public servicioAlumnos: ProductService,
  public toastr: ToastrService) { }

  ngOnInit(): void {
    this.servicioAlumnos.obtenerAlumnos();
    this.resetForm();
  }
  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
      this.servicioAlumnos.añadirAlumno(productForm.value);
    else
      this.servicioAlumnos.actualizarAlumno(productForm.value);

    this.resetForm(productForm);
    this.toastr.success('Operación Exitosa', 'Alumno Registrado');
  }

  // Para limpiar el formulario
  resetForm(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.servicioAlumnos.alumnoSeleccionado = new Product();
  }
}
