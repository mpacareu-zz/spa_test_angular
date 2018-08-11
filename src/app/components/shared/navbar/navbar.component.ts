import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,  private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(term: string) {
    this.router.navigate(['/search', term]);
  }

}
