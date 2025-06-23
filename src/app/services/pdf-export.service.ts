import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { AcordeUtilsService } from '../services/acorde-utils.service';

@Injectable()
export class PDFExportService {
  constructor(private acordeUtils: AcordeUtilsService) {}

  gerarPDF(
    titulo: string,
    tempo: string,
    compasso: string,
    tonalidade: string,
    secoes: { nome: string; acordes: string }[]
  ) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Título em negrito e centralizado
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    const tituloUpper = titulo.toUpperCase();
    const tituloWidth = doc.getTextWidth(tituloUpper);
    const tituloX = (pageWidth - tituloWidth) / 2;
    doc.text(tituloUpper, tituloX, 20);

    // Linha grossa abaixo do título
    doc.setLineWidth(1.5);
    doc.line(10, 24, pageWidth - 10, 24);

    // Header: Tempo e Compasso à esquerda, Tom à direita (todos em negrito)
    doc.setFontSize(12);
    const headerLeft = `Tempo: ${tempo} BPM (${compasso})`;
    const headerRight = `Tom: ${tonalidade}`;
    doc.text(headerLeft, 10, 32);
    const rightTextWidth = doc.getTextWidth(headerRight);
    doc.text(headerRight, pageWidth - 10 - rightTextWidth, 32);

    // Seções
    let y = 42;
    secoes.forEach((sec) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${sec.nome}:`, 10, y);
      doc.setFont('helvetica', 'normal');
      doc.text(
        this.formatarAcordes(sec.acordes),
        10 + doc.getTextWidth(`${sec.nome}: `),
        y
      );
      y += 10;
    });

    doc.save(`${titulo}.pdf`);
  }

  private formatarAcordes(acordes: string): string {
    return this.acordeUtils.formatarAcordes(acordes);
  }
}
