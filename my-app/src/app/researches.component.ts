import { Component, OnInit } from '@angular/core';

import { Research } from './research';
import { ResearchService } from './research.service';

@Component({
  selector: 'my-researches',
  templateUrl: './researches.component.html'
})
export class ResearchesComponent implements OnInit {
  researches: Research[];

  constructor(
    private researchService: ResearchService) { }

    getResearches(): void {
    this.researchService.getResearches().then(researches => this.researches = researches);
  }

  ngOnInit(): void {
    this.getResearches();
  }
}