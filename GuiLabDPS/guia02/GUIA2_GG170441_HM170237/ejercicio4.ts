class Calculadora{
  numero1:number;
  numero2:number;

  constructor(numero1:number,numero2:number)
{
    this.numero1=numero1;
    this.numero2=numero2;
}

calcOperaciones():string
{
    var num1:number=this.numero1;
    var num2:number=this.numero2;
    var suma:number=num1+num2;
    var resta:number=num1-num2;
    var multiplicacion:number=num1*num2;
    var division:number=num1/num2;
    return "Suma="+suma+" Resta= "+resta+"Multiplicacion="+multiplicacion+"Division="+division;
}

}
