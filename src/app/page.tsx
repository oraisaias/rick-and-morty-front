// src/app/page.tsx
'use client'

import Main from "./components/main"
import { Provider } from "react-redux"
import { store } from "@/store"

export default function Home() {
  return (
    <Provider store={store}>  
      <Main />
    </Provider>
  )
}
