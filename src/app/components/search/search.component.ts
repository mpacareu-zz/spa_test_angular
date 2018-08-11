import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  term: string;


  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService,  private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heroes = this._heroesService.buscarHeroes(params['term']);
    });
  }

  verHeroe( idx: number) {
    this.router.navigate(['/heroe', idx]);
  }


}
