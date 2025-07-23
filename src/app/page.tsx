// src/app/page.tsx
'use client'

import MainLayout from "./components/MainLayout/MainLayout"
import { Provider } from "react-redux"
import { store } from "@/store"

export default function Home() {
  return (
    <Provider store={store}>  
      <MainLayout />
    </Provider>
  )
}
