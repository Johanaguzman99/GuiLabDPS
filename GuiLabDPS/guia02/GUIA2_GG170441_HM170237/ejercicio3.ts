class Empleado{
  nombre:string;
  salario:number;

  constructor(nombre:string,salario:number)
{
    this.nombre="nombre";
    this.salario=salario;
}

calcDeducciones():number
{
    var salBase:number=this.salario;
    var isss:number=salBase*0.03;
    var afp:number=salBase*0.0625
    var retenciones:number=isss+afp;
    var aRecibir:number=salBase-retenciones;
    return aRecibir;
}

}

