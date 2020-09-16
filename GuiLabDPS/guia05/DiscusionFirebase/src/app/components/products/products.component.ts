import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public servicioAlumnos: ProductService,
  public toastr: ToastrService) { }

  ngOnInit() {
    this.servicioAlumnos.obtenerAlumnos();
    this.resetForm();
  }
  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
      this.servicioAlumnos.añadirAlumno(productForm.value);
    else
      this.servicioAlumnos.añadirAlumno(productForm.value);

    this.resetForm(productForm);
    this.toastr.success('Sucessful Operation', 'Product Registered');
  }
// Para limpiar el formulario
resetForm(productForm?: NgForm) {
  if (productForm != null)
    productForm.reset();
  this.servicioAlumnos.alumnoSeleccionado = new Product();
}

}
