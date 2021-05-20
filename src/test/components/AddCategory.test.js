import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Purebas en <AddCategory/>', () => {

    const setcategory = jest.fn();
    let wrapper = shallow(<AddCategory setcategory={setcategory} />);

    beforeEach(() => { //inicializa, limpia

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategory={setcategory} />);


    })
    test('debe mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();

    });



    test('debe de cambiar la caja de text', () => {
        const input = wrapper.find('input');
        const value = 'Hola mondo';
        input.simulate('change', { target: { value } });// {} valor de e del handleinputchange
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO debe de postear la info onsumbit < a 2', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });// preventD metodo dentro dle obj

        expect(setcategory).not.toHaveBeenCalled();
    });


    test('debe de llamar el setCategories y limpiar la caja de texto', () => {


        const value = "Hello React";
        //1 simular el inputChange

        wrapper.find('input').simulate('change', { target: { value } });
        //2 simular el submint
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //3 setCategories se debe haber llamado
        expect(setcategory).toHaveBeenCalled(); //almenos 1 vez
        // expect(setcategory).toHaveBeenCalledTimes(2); //expect se llame al menos 2 veces
        expect(setcategory).toHaveBeenCalledWith(expect.any(Function));
        // el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
        //<input
        //type="text"
        // value={inputValue}   />
    })


});
