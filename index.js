class Polygon{
  constructor(array){
    this.array = array;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter(){
    return this.array.reduce((s,n)=>s+n, 0);
  }
}

class Triangle extends Polygon{

}
