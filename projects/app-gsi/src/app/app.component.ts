import { Component } from '@angular/core';

@Component({
  selector: 'gsi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGSI';
  expandido=true

  validarExpandido(expandido:boolean){
    this.expandido = expandido 
  }
}
