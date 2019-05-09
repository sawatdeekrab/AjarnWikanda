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
  cols: any[];

  constructor(
    private researchService: ResearchService,
    @Inject(DOCUMENT) private document: any) { }

  getResearches(): void {
    this.researchService.getResearches().then(researches => this.researches = researches);
  }

  ngOnInit(): void {
    this.getResearches();
    this.cols = [
      { field: 'year', header: 'Year' , width: '10%'},
      { field: 'title', header: 'Title' , width: '60%'},
      { field: 'publishing', header: 'Publishing', width: '20%' },
      { field: 'language', header: 'Language' , width: '10%'}
      
  ];
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