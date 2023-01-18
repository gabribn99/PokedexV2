import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  autors: any = [
    { name: 'Gabriel', surname: 'Ballester Niebla', link: 'https://github.com/gabribn99' },
    { name: 'Omar', surname: 'Domínguez Fuentes', link: 'https://github.com/omardf00' }
  ]
}
