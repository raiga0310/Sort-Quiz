import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { install } from "@twind/core"
import tailwind from "@twind/preset-tailwind"
install({ presets: [tailwind()] })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
