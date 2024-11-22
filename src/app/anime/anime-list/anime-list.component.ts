import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  episodio: number = 0;
  promedio: number = 0;
  constructor(private animeService: AnimeService) { }


  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  getDatosAnime() {
    let episodio = 0;
    let suma = 0;
    let total = 0;
    this.animeService.getAnimes().subscribe((animes) => {
      animes.forEach((n) => {
        episodio += n.episode;
        suma += Number(n.Rating);
        total += 1;
      });
      this.episodio = episodio;
      this.promedio = (suma/total);
    });
  
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
    this.getDatosAnime();
  }

}
