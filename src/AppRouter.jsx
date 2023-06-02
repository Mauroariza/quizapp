import React from 'react'

import { Routes, Route } from 'react-router-dom'
import {HomePage,CategoryPage} from './pages'

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  )
}
