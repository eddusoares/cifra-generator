import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AcordeUtilsService {
  formatarAcordes(acordes: string): string {
    return (
      '| ' +
      acordes
        .split(/\s*,\s*|\s+/)
        .map((raw) => {
          // Trata acordes com baixo (barra)
          const [acorde, baixoRaw] = raw.split('/');
          const baixo = baixoRaw ? '/' + baixoRaw.toUpperCase() : '';

          // Regex: nota, acidente, menor, diminuto, sufixos
          // Ex: bo7, co, do, fo, go, ao, eo, fo7, etc.
          const match = acorde.match(/^([A-Ga-g])(b?)(#?)(m|o)?(.*)$/);
          if (!match) return raw.toUpperCase() + baixo;

          let [_, nota, bemol, sustenido, tipo, sufixos] = match;
          nota = nota.toUpperCase();
          bemol = bemol || '';
          sustenido = sustenido || '';
          tipo = tipo || '';
          sufixos = sufixos || '';

          // Diminuto: "o" minúsculo após a nota
          if (tipo === 'o') {
            return `${nota}${sustenido}${bemol}°${sufixos.toUpperCase()}${baixo}`;
          }
          // Menor
          if (tipo === 'm') {
            return `${nota}${sustenido}${bemol}m${sufixos.toUpperCase()}${baixo}`;
          }
          // Maior ou outros
          return `${nota}${sustenido}${bemol}${sufixos.toUpperCase()}${baixo}`;
        })
        .join(' | ') +
      ' |'
    );
  }
}
