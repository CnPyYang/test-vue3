import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始样式
import 'reset-css'
// 框架样式
import '@/assets/style/global.scss'
import Router from './router'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
