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
console.log(Object.keys(products));
console.log(Object.values(products));
console.log(Object.entries(products));

let set = new Set([1,2,2,1,1,4,4,2,3,4]);
set.add(5);
set.delete(1);
console.log(set);
console.log(set.has(3));

for(values of set){
    console.log('-', values);
}

for(const key in products){
    console.log(key);
}

const Mapa = new Map();
Mapa.set('ID', 'a1b2c3');
Mapa.set('Category', 'Technology');
Mapa.set('Name', 'Laptop');

Mapa.forEach((values, keys) => {
    console.log(`${keys} : ${values}`);
});