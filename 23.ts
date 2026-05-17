// <!-- develop a typeScript generics inventory management system to handle different item types such as boooks electronics display items dynamcially and ensure type safelty  
/*
interface Book{
    title:string;
    author:string;
}
interface Electronics{
    name:string;
    brand:string;
}
class Inventory<T>{
    items:T[]=[];
    add(item:T){
        this.items.push(item);
    }
    show(){
        console.log(this.items);
    }
}

const books = new Inventory<Book>();

books.add({
    title:"Java",
    author:"James"
});

books.add({
    title:"TypeScript",
    author:"Anders"
});

books.show();

const electronics = new Inventory<Electronics>();

electronics.add({
    name:"Laptop",
    brand:"Dell"
});

electronics.add({
    name:"Mobile",
    brand:"Samsung"
});

electronics.show();
*/
/*
interface Vehicle{
    vehicleId:number;
    model:string;
    price:number;
    type:string;
}

class VehicleStore<T>{
    vechicles:T[]=[];

    addVehicle(vehicle:T):void{
        this.vechicles.push(vehicle);
    }
    displayVehicles():void{
        this.vechicles.forEach((vehicle)=>{
            console.log(vehicle);
        })
    }
}

const store=new VehicleStore<Vehicle>();

store.addVehicle({
    vehicleId: 101,
    model: "Honda City",
    price: 1200000,
    type: "Car"

})

store.displayVehicles();
*/

interface Product{
    name:string;
    price:number;
}

function addItem<T>(cart:T[],item:T):T[]{
    cart.push(item);
    return cart;
}

function combineDetails<T,U>(obj1:T,obj2:U):T&U{
    return {...obj1,...obj2};
}

let cart:Product[]=[];

addItem(cart, {
    name: "Laptop",
    price: 50000
});

addItem(cart, {
    name: "Mobile",
    price: 20000
});

const productDetails=combineDetails(
    {name:"HeadPhones"},
    {price:3000}
)

console.log(productDetails);
