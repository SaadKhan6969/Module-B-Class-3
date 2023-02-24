// let a={
//     name:'ABC'
// }
// let b=a
// a.id=123
// console.log(a)

//  ===  SPREAD OPERATOR ===  



// let config={
//     inst:'SAIMS',
//     course:'Web And Mob',
//     batch:6,
//     year:2023
// }
// let std1 ={
//     ...config,
//     name:'saad',
//     age:18,
//     sec:'A'

// }
// console.log(std1)


// let a =['a','b','c']
// let c=[1,2,3,...a]
// console.log(c)


// let a={
//     name:'Abc'
// }
// let b={...a}
// b.id=123
// console.log(a,b)

// let a =['a','b','c']
// let b=[...a]
// b.push(123)
// console.log(a,b)

// let a =[{
//     name:'Abc',
//     id:1,
//     details:{
//         city:'karachi',
//         country:'pak'
//     }
// }]
// let b=JSON.parse(JSON.stringify([...a]))
// delete b[0].details
// console.log(b)



// ====== Rest OPerator ========
// function abc(...rest){
//     console.log(rest)

// }

// abc(1,2,3,4)


// function abc(...rest) {
//     console.log(rest)
// }
// abc(1, 2, 3, 4)
// ======= destructing ========

// let obj = {
//     id:1,
//     name:'abc',
//     username:'abc123',
//     contact:'1234567'
// }
// let {username,name,id,contact} = obj
// console.log(username) 
// console.log(name) 
// console.log(id) 
// console.log(contact) 



// for Array====

// let arr=['abc','mno','def','ghi','jkl']
// let [val1,val2,,val4]=arr
// console.log(val4)


// let arr=['abc','mno','def','ghi','jkl']
// let [val1,val,val3,,val5]=arr
// console.log(val5)

let arr =[
    2,
    2,
    3,
    "abc",
    "ty",
    [
        true,
        {
            id:374,details:[{id:1,name:"Abu Baker",dt:[1,2,3,4,5]}]
        }
    ]
]

// let {name}=arr[5][1].details[0]

let {dt}=arr[5][1].details[0]
let [val1,val2,val3,val4,val5]=dt

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)


