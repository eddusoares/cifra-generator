import { Component, Input } from '@angular/core';
import { AcordeUtilsService } from '../services/acorde-utils.service';

@Component({
  selector: 'app-preview-cifra',
  templateUrl: './preview-cifra.component.html',
})
export class PreviewCifraComponent {
  @Input() titulo = '';
  @Input() tempo = '';
  @Input() compasso = '';
  @Input() tonalidade = '';
  @Input() secoes: { nome: string; acordes: string }[] = [];

  constructor(private acordeUtils: AcordeUtilsService) {}

  formatarAcordes(acordes: string): string {
    return this.acordeUtils.formatarAcordes(acordes);
  }
}
