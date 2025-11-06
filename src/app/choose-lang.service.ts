import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChooseLangService {

  choosenLang = 'en';

  constructor() { }
}
