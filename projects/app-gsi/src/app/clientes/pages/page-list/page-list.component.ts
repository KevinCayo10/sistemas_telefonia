import { Component } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { environment } from 'projects/app-gsi/src/environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';
import { KeypadButton } from '../../../shared/interfaces/keypadButton.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'gsi-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  registros: any[] = [
    {
      _id: 1,
      nombresCompletos: 'Carlos Mayorga',
      direccion: 'Av. Quito',
      fechaNacimiento: '01/01/2001',
      celular: '0999999999',
    },
    {
      _id: 2,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 3,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 4,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
    {
      _id: 5,
      nombresCompletos: 'Maria Oviedo',
      direccion: 'Av. Quero',
      fechaNacimiento: '05/05/2005',
      celular: '05555555555',
    },
    {
      _id: 6,
      nombresCompletos: 'Carlos Mayorga',
      direccion: 'Av. Quito',
      fechaNacimiento: '01/01/2001',
      celular: '0999999999',
    },
    {
      _id: 7,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 8,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 9,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
    {
      _id: 10,
      nombresCompletos: 'Maria Oviedo',
      direccion: 'Av. Quero',
      fechaNacimiento: '05/05/2005',
      celular: '05555555555',
    },
    {
      _id: 11,
      nombresCompletos: 'Carlos Mayorga',
      direccion: 'Av. Quito',
      fechaNacimiento: '01/01/2001',
      celular: '0999999999',
    },
    {
      _id: 12,
      nombresCompletos: 'Jorge Canseco',
      direccion: 'Av. Ambato',
      fechaNacimiento: '02/02/2002',
      celular: '0888888888',
    },
    {
      _id: 13,
      nombresCompletos: 'Bryan Torres',
      direccion: 'Av. Riobamba',
      fechaNacimiento: '03/03/2003',
      celular: '0777777777',
    },
    {
      _id: 14,
      nombresCompletos: 'Andres Nuñez',
      direccion: 'Av. Cevallos',
      fechaNacimiento: '04/04/2004',
      celular: '0666666666',
    },
    {
      _id: 15,
      nombresCompletos: 'Maria Oviedo',
      direccion: 'Av. Quero',
      fechaNacimiento: '05/05/2005',
      celular: '05555555555',
    },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'nombresCompletos', title: 'NOMBRES' },
    { field: 'direccion', title: 'DIRECCION' },
    { field: 'fechaNacimiento', title: 'FECHA DE NACIMIENTO' },
    { field: 'celular', title: 'CELULAR' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(
    private dialog: MatDialog,
    private clienteService: ClienteService
  ) {
    this.cargarClientes();
  }

  cargarClientes() {
    /*  this.data = this.registros;
    this.totalRegistros = this.data.length;
    this.changePage(0);*/

    this.clienteService.cargarClientes().subscribe((dataWeb) => {
      this.data = dataWeb;
      this.totalRegistros = this.data.length;
      this.changePage(0);
    });
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.data.slice(salto, salto + pageSize);
  }

  abrirFormulario(fila: any = null) {
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };

    const referencia: MatDialogRef<FormComponent> = this.dialog.open(
      FormComponent,
      opciones
    );

    referencia.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }
      if (response.id) {
        //Editar
        const cliente = { ...response };

        this.clienteService
          .actualizarCliente(response.id, cliente)
          .subscribe(() => {
            this.cargarClientes();
          });
      } else {
        //Añadir
        console.log('else');
        const cliente = { ...response };
        this.clienteService.registrarCliente(cliente).subscribe(() => {
          console.log(cliente);
          this.cargarClientes();
        });
      }
    });
  }

  eliminar(id: any) {
    this.clienteService.eliminarCliente(id).subscribe(() => {
      this.cargarClientes();
    });
  }

  keypadButtons: KeypadButton[] = [
    {
      icon: 'cloud_download',
      tooltip: 'EXPORTAR',
      color: 'accent',
      accion: 'download',
    },
    { icon: 'add', tooltip: 'AGREGAR', color: 'primary', accion: 'NUEVO' },
  ];

  enviarAccion(accion: string) {
    switch (accion) {
      case 'DOWNLOAD':
        break;
      case 'NUEVO':
        this.abrirFormulario();
        break;
    }
  }
}
