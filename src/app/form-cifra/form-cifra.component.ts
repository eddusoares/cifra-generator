import { Component } from '@angular/core';
import { AcordeUtilsService } from '../services/acorde-utils.service';
import { PDFExportService } from '../services/pdf-export.service';

@Component({
  selector: 'app-form-cifra',
  templateUrl: './form-cifra.component.html',
  styleUrls: ['./form-cifra.component.css'],
})
export class FormCifraComponent {
  titulo = '';
  tempo = '';
  compasso = '';
  tonalidade = '';
  tons = [
    'C',
    'C#',
    'Db',
    'D',
    'D#',
    'Eb',
    'E',
    'F',
    'F#',
    'Gb',
    'G',
    'G#',
    'Ab',
    'A',
    'A#',
    'Bb',
    'B',
  ];
  secoes: { nome: string; acordes: string }[] = [];
  novaSecao = { nome: '', acordes: '' };

  constructor(
    private pdfService: PDFExportService,
    private acordeUtils: AcordeUtilsService
  ) {}

  adicionarSecao() {
    if (this.novaSecao.nome && this.novaSecao.acordes) {
      this.secoes.push({ ...this.novaSecao });
      this.novaSecao = { nome: '', acordes: '' };
    }
  }

  formatar(acordes: string): string {
    return '| ' + acordes.toUpperCase().replace(/\s*,\s*/g, ' | ') + ' |';
  }

  formatarAcordes(acordes: string): string {
    return this.acordeUtils.formatarAcordes(acordes);
  }

  gerarPDF() {
    this.pdfService.gerarPDF(
      this.titulo,
      this.tempo,
      this.compasso,
      this.tonalidade,
      this.secoes
    );
  }
}
