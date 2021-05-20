import React from 'react'
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    return (

        <>
            <h3 style={{ color: "white" }}><u>Bienvenido</u></h3>


            {/* Si el primero es true, crea el segundo */}
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">

                {
                    images.map(img => (
                        // <li key={img.id}>{img.title}</li>
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }


                <div className="CategoryName">
                    <p>Su categoria es: <b>{category}</b></p>
                </div>
            </div>
        </>

    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}