import React from 'react'

function Greeting({name,age}) {
  return (
    <div>
        <h1>Hello {name} </h1>
        <p>Your age is {age}</p>
    </div>
  )
}

export default Greeting

//It is one way only can move from parent to child.
//It is also immutable.
//Order doesn't matter in object-Destructuring

//Filter,Map,Reduce --> use to traverse an array.
//Higher order-functions --> A function which can take a function as an argument.
//Default Props

//Children Props