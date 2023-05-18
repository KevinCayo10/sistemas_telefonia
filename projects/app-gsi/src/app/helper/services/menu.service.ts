import { Injectable } from '@angular/core';

export interface IMenu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listaMenu: IMenu[] = [
    { title: 'Clientes', url: '/clientes', icon: '/assets/icon/client.svg' },
    {
      title: 'Cobertura',
      url: '/cobertura',
      icon: '/assets/icon/cobertura_1.svg',
    },
    { title: 'Planes', url: '/planes', icon: '/assets/icon/planes.svg' },
    {
      title: 'Proveedores',
      url: '/proveedores',
      icon: '/assets/icon/proveedor.svg',
    },
    { title: 'Soporte', url: '/soporte', icon: '/assets/icon/support.svg' },
    { title: 'Stock', url: '/stock', icon: '/assets/icon/stock.svg' },
    { title: 'Técnicos', url: '/tecnicos', icon: '/assets/icon/technical.svg' },
    { title: 'Usuarios', url: '/usuarios', icon: '/assets/icon/users.svg' },
  ];
  constructor() {}

  getMenu(): IMenu[] {
    return [...this.listaMenu];
  }

  getMenuByUrl(url: string): IMenu {
    return this.listaMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu;
  }
}
