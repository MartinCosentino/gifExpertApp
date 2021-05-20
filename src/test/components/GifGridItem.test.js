import React from 'react';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");


describe('Prueba GifGridItem', () => {

    const title = 'Un title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });




    test('debe tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        // console.log(img.props())

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);



    });

    test('debe de tener la misma clase', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');


        //para verificar una clase usar props
        expect(div.prop('className')).toBe('card animate__animated animate__bounce');
        expect(className.includes('animate__bounce')).toBe(true);
    })


});
