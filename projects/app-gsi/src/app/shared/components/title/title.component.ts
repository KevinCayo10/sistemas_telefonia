import { Component } from '@angular/core';
import { IMenu, MenuService } from '../../../helper/services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gsi-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  path:IMenu

  constructor(private menuServicio:MenuService,
    private activatedRoute:ActivatedRoute){
      const urlActiva = 
      '/'+activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path
      this.path = menuServicio.getMenuByUrl(urlActiva)
  }

}
