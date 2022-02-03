import { plants } from '../mock/flowers';

export const category = [
  {
    id: 1,
    count: plants.filter((value) => value.category === 'house').length,
    path: '/:house',
    title: 'House',
  },
  {
    id: 2,
    count: plants.filter((value) => value.category === 'plantspotter').length,
    path: '/:plantspotter',
    title: 'Plants Potter',
  },
  {
    id: 3,
    count: plants.filter((value) => value.category === 'plants').length,
    path: '/:plants',
    title: 'Plants',
  },
  {
    id: 4,
    count: plants.filter((value) => value.category === 'seeds').length,
    path: '/:seeds',
    title: 'Seeds',
  },
  {
    id: 5,
    count: plants.filter((value) => value.category === 'smallplants').length,
    path: '/:smallplants',
    title: 'Small Plants',
  },
  {
    id: 6,
    count: plants.filter((value) => value.category === 'bigplants').length,
    path: '/:bigplants',
    title: 'Big Plants',
  },
  {
    id: 7,
    count: plants.filter((value) => value.category === 'succulents').length,
    path: '/:succulents',
    title: 'Succulents',
  },
  {
    id: 8,
    count: plants.filter((value) => value.category === 'trerrariums').length,
    path: '/:trerrariums',
    title: 'Trerrariums',
  },
  {
    id: 9,
    count: plants.filter((value) => value.category === 'gardening').length,
    path: '/:gardening',
    title: 'Gardening',
  },
  {
    id: 10,
    count: plants.filter((value) => value.category === 'accessories').length,
    path: '/:accessories',
    title: 'Accessories',
  },
];
