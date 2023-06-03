/* array filter, find, foreach, map, reduce */

const arrayBundle = [
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 10, b: 2}
]

/* filter array */
const filtrando = arrayBundle.filter(x => x.a > 2)

console.log(filtrando)

/* find array */
const find = arrayBundle.find(x => x.a === 10)

console.log(find)