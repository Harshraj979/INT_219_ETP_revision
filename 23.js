"use strict";
// <!-- develop a typeScript generics inventory management system to handle different item types such as boooks electronics display items dynamcially and ensure type safelty  
class Inventory {
    items = [];
    add(item) {
        this.items.push(item);
    }
    show() {
        console.log(this.items);
    }
}
const books = new Inventory();
books.add({
    title: "Java",
    author: "James"
});
books.add({
    title: "TypeScript",
    author: "Anders"
});
books.show();

const electronics = new Inventory();
electronics.add({
    name: "Laptop",
    brand: "Dell"
});
electronics.add({
    name: "Mobile",
    brand: "Samsung"
});
electronics.show();


