import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Research } from './research';
import { ResearchService } from './research.service';

@Component({
  selector: 'my-researches',
  templateUrl: './researches.component.html'
})
export class ResearchesComponent implements OnInit {
  researches: Research[];
  stacked;

  constructor(
    private researchService: ResearchService,
    @Inject(DOCUMENT) private document: any) { }

  getResearches(): void {
    this.researchService.getResearches().then(researches => this.researches = researches);
  }

  ngOnInit(): void {
    this.getResearches();
  }
  sortF: string = '';
  selectedResearch: Research;


  changeSort(event) {
    if (!event.order) {
      this.sortF = 'year';
    } else {
      this.sortF = event.field;
    }
  }

  onRowSelect(event) {
    window.open(event.data.downloadLink, "_blank");
}
}