import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Trayendo datos de firebase
  listaAlumnos: AngularFireList<any>;
  alumnoSeleccionado: Product = new Product();


  constructor(private firebase: AngularFireDatabase) { }
  obtenerAlumnos(){
    return this.listaAlumnos = this.firebase.list('products');

  }

  añadirAlumno(alumno: Product)
  {
    this.listaAlumnos.push({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad



    });
  }

  actualizarAlumno(alumno: Product){
    this.listaAlumnos.update(alumno.$key,{
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad
    });
  }

  eliminarAlumno($key: string) {
    this.listaAlumnos.remove($key);
  }
}
