const person = {
    name: 'john',
    age:30
};
//key holds the name of one of propierts above
for (let key in person)
    console.log(key,':',person[key]);
//in each loop value would be diffeent so we use bracket notation


const colors = ['red','blue','green'];
for (let index in colors)
    console.log(index, colors[index]); //inex 0
    //console.log(index*1+1, colors[index]); index 1