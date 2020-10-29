import React, { useEffect, useState } from "react";
import AlumnosForm from "./AlumnosForm";

import { db } from "../Firebase";
import { toast } from "react-toastify";

const Alumnos = () => {
  const [Alumnos, setAlumnos] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getAlumnos = async () => {
    db.collection("Alumnos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlumnos(docs);
    });
  };

  const onDeleteAlumno = async (id) => {
    if (window.confirm("are you sure you want to delete this Alumno?")) {
      await db.collection("Alumnos").doc(id).delete();
      toast("¡Se eliminó un empleado!", {
        type: "error",
        //autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  const addOrEditAlumno = async (AlumnoObject) => {
    try {
      if (currentId === "") {
        await db.collection("Alumnos").doc().set(AlumnoObject);
        toast("Se agregó un Empleado", {
          type: "success",
        });
      } else {
        await db.collection("Alumnos").doc(currentId).update(AlumnoObject);
        toast("Se actualizó un Empleado", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>    
      <div className="col-md-4 p-2">
        <h2>AGREGAR EMPLEADO</h2>
        <AlumnosForm {...{ addOrEditAlumno, currentId, Alumnos }} />
      </div>

      <div className="col-md-8 p-2">
        <div class="container">
          <h2>Lista de Empleados</h2>
          <table class="table table-hover">
            <thead>
              <tr>
              <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cargo</th>
                
              </tr>
            </thead>
            <tbody>
              {Alumnos.map((Alumno) => (
                <tr key={Alumno.id}>
                  <td>{Alumno.identificacion}</td>
                  <td>{Alumno.nombre}</td>
                  <td>{Alumno.apellido}</td>
                  <td>{Alumno.cargo}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => setCurrentId(Alumno.id)}>Editar</button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => onDeleteAlumno(Alumno.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Alumnos;
