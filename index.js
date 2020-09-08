class Polygon{
  constructor(array){
    this.array = array;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter(){
    this.array.reduce((s,n)=>s+n, 0)
  }
}
