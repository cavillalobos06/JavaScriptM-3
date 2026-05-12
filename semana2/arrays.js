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

let set = new Set([1,2,2,1,1,4,4,2,3,4]);
set.add(5);
set.delete(1);
console.log(set);
console.log(set.has(3));

for(value of set){
    console.log('-', value);
}

const Mapa = new Map();
Mapa.set('ID', 'a1b2c3');
Mapa.set('Category', 'Technology');
Mapa.set('Name', 'Laptop');

console.log(`ID: ${Mapa.get('ID')}, 
Category: ${Mapa.get('Category')}, 
Name: ${Mapa.get('Name')}`);


const numbers = [10, 20, 30,30, 40, 50, 51];
const names = new Set(numbers);