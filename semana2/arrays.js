let products = {
    id: 'a1b2c3',
    name: 'Laptop',
    price: 1500,
    stock: 30,
    colors: ['Red', 'Blue', 'Green'],
    details: {
        weight: '2kg',
        dimensions: '30cm x 20cm x 2cm'
    }
};

const Mapa = new Map();
Mapa.set('id', 'a1b2c3');
Mapa.set('name', 'Laptop');

console.log(Mapa.get('name'));


const numbers = [10, 20, 30,30, 40, 50, 51];
const names = new Set(numbers);

names.add(60);
names.delete(20);

for(let name of names){
    console.log('-', name);
}

// for(let value of Object.values(products)){
//     console.log(Object.keys(products)[Object.values(products).indexOf(value)] + ': ' + value);
// }






// products.available = true;
// delete products.stock;
// console.log(products);


// let person = {
//     name: 'Camilo',
//     lastName: 'Villalobos',

//     fullName: function(){
//         return `${this.name} ${this.lastName}`;
//     },

//     saludar: function(){
//         console.log(`Hello ${this.fullName()}!`);
//     }
// }
// person.saludar();