class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;

    constructor (diagonalVertical:number, diagonalHorizontal:number)
    {
        this.diagonalVertical=diagonalVertical;
        this.diagonalHorizontal=diagonalHorizontal;
    }
   
    CalArea():number
    {
     var  Area:number=this.diagonalHorizontal*this.diagonalVertical;
        return Area; 
    }

}