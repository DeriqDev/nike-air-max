import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Environment, Lightformer, Sky, Sparkles,Html, Text } from '@react-three/drei'
import React, {Suspense} from 'react'
import Light from './Light'
import Letter from './Letter'
import Overlay from './Overlay'
import "./style.css"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Experience />
)

