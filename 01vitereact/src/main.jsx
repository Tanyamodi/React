import React from 'react'
import ReactDOM from 'react-dom/client'
// import { jsx as _jsx } from "react/jsx-runtime.js"
import App from './App.jsx'
import { createElement } from 'react'

function MyApp() {
  return (
    <div>
      <h1>Custom App | book</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = "book aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
  render(
    reactElement
  )
