// import React from "react"
// import ReactDom from "react-dom"
// import App from "./components/App.jsx"

// ReactDom.render(
//   <App></App>,
//   document.getElementById("root")
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.js'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
