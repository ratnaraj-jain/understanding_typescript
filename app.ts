const button = document.querySelector('button');

function add(){
    const number1 = 2.5;
    const number2 = 1.3;
    console.log(number1 + number2);
}

if(button){
    button.addEventListener('click', add);
}  


class Point{
    x: number;
    constructor(x:number, public y: number){
        this.x = x;
    }
    dist():number {
        return Math.sqrt(this.x*this.x + this.y*this.y );
    }
}
let p1 = new Point(1,5);

class Point3D extends Point{
    constructor(x:number, y:number, public z:number = 0){
        super(x,y);
    }
    dist():number {
        let d = super.dist();
        return Math.sqrt(d*d + this.z*this.z);
    }
}

class Tuple<T1, T2> {
    constructor(public item1:T1, public item2: T2){}
}
let newbaby = new Tuple<string, number>('NEW', 4);

interface Pair<T>{
    item1: T,
    item2: T
}

