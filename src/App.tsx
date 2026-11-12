// import { useState } from 'react'
import './App.css'
import ourData from "./etsy.json" with {type: "json"}
import Listing from './productCard'
import type { CardInterface } from './productCard'

function App() {
        const data = ourData.filter(
        (obj): obj is typeof obj & CardInterface =>
            obj.state === "active" &&
            typeof obj.url === "string" &&
            typeof obj.MainImage?.url_570xN === "string"
    )

    return (
        <>
        <div className="product-grid">
            <Listing item={data} />
        </div>
        </>
    )
}

export default App
