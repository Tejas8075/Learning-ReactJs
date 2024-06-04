import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherEelement = "Tejas";

const reactElement = React.createElement(
  'a' ,//Tag name
  {href: 'https://google.com', target: '_blank'}, //set the attributes of the tag
  'Cick me to visit google', //Text in the tag
  anotherEelement //Evaluated Expressions = JS in react
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
  // Converts it to object as in custom react app
)
