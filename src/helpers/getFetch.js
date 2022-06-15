const arrItems = [
    {
        id: 1,
        title: 'producto 1',
        descripcion: 'descripcion 1',
        price: 100,
        pictureUrl: '/images/martillo.jpg',

    },
    {
        id: 2,
        title: 'producto 2',
        descripcion: 'descripcion 2',
        price: 200,
        pictureUrl: '/images/camiseta.jpg',
    },
    {
        id: 3,
        title: 'producto 3',
        descripcion: 'descripcion 3',
        price: 300,
        pictureUrl: '/images/router.jpg',

    }
];

export const getFetch = () => {
    return new Promise((resolve) => {
        resolve(arrItems);
    });
};

const item = {
        id: 1,
        title: 'producto 1',
        descripcion: 'descripcion 1',
        price: 100,
        pictureUrl: '/images/martillo.jpg',

    };

export const getFetchItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
};