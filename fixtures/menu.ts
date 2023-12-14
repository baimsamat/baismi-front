export interface Menu {
  id: number
  name: string
  href: string
}

const createMenuItem = (params?: Partial<Menu>): Menu => {
  return {
    id: 1,
    name: 'Все материалы',
    href: '/all',
    ...params
  };
};

export const fakeMenu = [
  createMenuItem(),
  createMenuItem({
    id: 2,
    name: 'Политика',
    href: '/politic'
  }),
  createMenuItem({
    id: 3,
    name: 'Экономика',
    href: '/economic'
  }),
  createMenuItem({
    id: 4,
    name: 'Общество',
    href: '/social'
  }),
  createMenuItem({
    id: 5,
    name: 'Наука',
    href: '/science'
  })
];
