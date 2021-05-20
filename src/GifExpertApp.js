import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'



export const GifExpertApp = () => {


    const [category, setcategory] = useState(['WELCOME!'])

    // const handleAdd = () => {
    //     setcategory([...category, 'HunterXHunter']); //SPREAD para agregar elementos al arreglo usando setcategory para cambiar el state
    // }

    return (
        <>
            <h1 className="animate__animated animate__fadeIn" id="title" style={{ display: "flex", justifyContent: "center", fontSize: "10rem" }}>GifExpertApp</h1>
            <p className="animate__animated animate__backInDown" style={{ display: "flex", justifyContent: "center" }}>- Que Gif Estas Buscando? -</p> <br />

            <AddCategory setcategory={setcategory} />
            <hr />

            <ol>
                {
                    category.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                    // <li key={category}>{category}</li> //key obligatorio y unico

                }
            </ol>

            <br />
            <div className="footerContenedor">
                <p className="footer"> Encontras lo que buscas? más gifs en la pagina oficial de <a style={{ marginLeft: "4px" }} href="https://giphy.com/">  GIPHY </a>.</p>
            </div>

        </>
    )
}
