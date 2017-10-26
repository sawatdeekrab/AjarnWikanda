import { Research } from './research';
import { RESEARCHES } from './mock-researches';
import { Injectable } from '@angular/core';

@Injectable()
export class ResearchService {
  getResearches(): Promise<Research[]> {
    return Promise.resolve(RESEARCHES);
  }
}