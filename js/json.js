const user = { id: 1, name: 'Gorib Aamir', Job: 'actor' };
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);
/*
OUTPUT:
{ id: 1, name: 'Gorib Aamir', Job: 'actor' }
{"id":1,"name":"Gorib Aamir","Job":"actor"}
*/
const shop = {
    owner: 'Alia',
    address: {
        street: 'kcukhet',
        city: 'chittagong',
        country: 'BD '
    },
    products: ['laptop', 'mic', 'monitor,', 'keybord'],
    revenue: 450000,
    isOpen: true,
    isNew: false,
}
console.log(shop);
// Object to string 
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// string to object 
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);