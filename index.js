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
  isValid(){
    const a = this.array;
    return !(a[0]+a[1]<a[2]||a[1]+a[2]<a[0]||a[2]+a[0]<a[1])
  }
}

// new Triangle([3,4,5]).isValid();
