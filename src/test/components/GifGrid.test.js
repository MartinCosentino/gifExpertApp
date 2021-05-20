import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");




describe('Pruebas sobre el GifGrid', () => {

    const category = 'Blue Exorcist';

    test('Debe de coincidir con el matchsnapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();


    });

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'Cualquier Cosa'
        }, {
            id: '123',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'Cualquier Cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });


});
