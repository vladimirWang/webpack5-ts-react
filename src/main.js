// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <App />
// )
import imgSrc from './1.png'
const root = document.getElementById('root')
const el = document.createElement('div')
el.innerHTML = 'hello'
root.appendChild(el)
const img = document.createElement('img')
img.setAttribute('src', imgSrc)
root.appendChild(img)