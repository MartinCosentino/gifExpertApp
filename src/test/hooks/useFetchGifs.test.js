import { waitForElementToBeRemoved } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en useFetchGifs', () => {



    test('debe de retornar el estado inicial ', () => {



        // const { result } = renderHook(() => useFetchGifs('One Punch'));
        // const { data, loading } = result.current; //current = valor actual del custom hook

        // expect(data).toEqual([]);
        // expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data).toEqual([
            {
                "id": "yo3TC0yeHd53G",
                "title": "saitama GIF",
                "url": "https://media2.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "X7tD5RBKqJ8zK",
                "title": "One Punch Man Bubblegum GIF",
                "url": "https://media4.giphy.com/media/X7tD5RBKqJ8zK/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "VXJWhaO7afRe",
                "title": "blase one punch man GIF",
                "url": "https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "arbHBoiUWUgmc",
                "title": "one punch man preview GIF",
                "url": "https://media4.giphy.com/media/arbHBoiUWUgmc/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "mAJxVnLmZcZMzhyPvO",
                "title": "One Punch Man GIF by memecandy",
                "url": "https://media0.giphy.com/media/mAJxVnLmZcZMzhyPvO/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "3o6Zt3NND1TdnIAfSM",
                "title": " ",
                "url": "https://media1.giphy.com/media/3o6Zt3NND1TdnIAfSM/giphy-downsized-medium.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy-downsized-medium.gif",
            },
            {
                "id": "Ifh0I89dL5eRxKBEZp",
                "title": "One Punch Man GIF by memecandy",
                "url": "https://media3.giphy.com/media/Ifh0I89dL5eRxKBEZp/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "6IkjQmpaRwIabJ2G3C",
                "title": "bored one punch man GIF",
                "url": "https://media1.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy-downsized-medium.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy-downsized-medium.gif",
            },
            {
                "id": "XHY2UPgzbaQ6NEtcyw",
                "title": "One Punch Man GIF by memecandy",
                "url": "https://media4.giphy.com/media/XHY2UPgzbaQ6NEtcyw/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
            {
                "id": "ckO5BmThci6ET09PEk",
                "title": "One Punch Man GIF by memecandy",
                "url": "https://media0.giphy.com/media/ckO5BmThci6ET09PEk/giphy.gif?cid=83107f58dq1gd3mm2qhltnwcilshjys9tb9qf4uiba0q0umi&rid=giphy.gif",
            },
        ]);
        expect(loading).toBe(false);

    });

});
