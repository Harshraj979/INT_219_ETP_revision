// <!-- develop a typeScript generics inventory management system to handle different item types such as boooks electronics display items dynamcially and ensure type safelty  

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