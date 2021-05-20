const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas en getGifs fetch', () => {

    test('debe de traer a 10 elementos', async () => {


        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });


    test('debe de traer a 10 elementos', async () => {


        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });




});
