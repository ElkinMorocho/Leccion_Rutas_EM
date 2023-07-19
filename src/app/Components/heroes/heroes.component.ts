import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Rutas } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Rutas [] = [];

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes);
    
  }

  constructor(private _heroesServices:HeroesService, private router: Router) {
}
verHeroe(idx:number){
  console.log(idx);
  this.router.navigate(['/heroe',idx]);
}
}
