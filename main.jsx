import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FormwithCustomHook } from './02-useState/FormWithCustomHook'
// import { SimpleForm } from './02-useState/SimpleForm'
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre />
  //</React.StrictMode>
)
