import React from "react";
import Navbar from "./components/Navbar";
import styles from '../styles/homepage.module.css'
import Calculator from './components/Calculator'
import Recommendations from './components/Recommendations'

export default function calculatePage() {
    return (
        <div className="bg-primary shadow-innerShadow">
            <Navbar currentTab='calculate'/>
            <div className='mb-12'>
            </div>
            <Calculator />
            <Recommendations/>
            
        </div>
    );
}