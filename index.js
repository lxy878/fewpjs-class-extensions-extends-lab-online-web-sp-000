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
    let v = this.array[array.length-1];
    for(let i=1; i<this.array.length; i++){
      console.log(this.array[i-1]+this.array[i]<v);
      // if(this.array[i-1]+this.array[i]<v) return false
      v = this.array[i-1];
    }
    return true;
  }
}

new Triangle([3,4,5]);
