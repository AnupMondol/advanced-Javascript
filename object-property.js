const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaa'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Dipjol'},
];

const namess = students.map(function(element){
    const name = element.name;
    return name;
})

const names = students.map(s => s.name);

const ids = students.map( i => i.id);

const high = students.filter(s => s.id > 40)

const high1 = students.find(s => s.id > 40)

 console.log(high1);

