import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import React from 'react';
import { GifExpertApp } from "../GifExpertApp";


describe('Preubas en el archivo principal GifExpertApp', () => {

    test('Debe de coincidir con el Snapshot', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();



    });


});

