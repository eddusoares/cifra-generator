import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AcordeUtilsService {
  formatarAcordes(acordes: string): string {
    return (
      '| ' +
      acordes
        .split(/\s*,\s*|\s+/)
        .map((raw) => {
          const [acorde, baixoRaw] = raw.split('/');
          const baixo = baixoRaw ? '/' + baixoRaw.toUpperCase() : '';
          const match = acorde.match(/^([A-Ga-g])(b?)(#?)(m|o)?(.*)$/);
          if (!match) return raw.toUpperCase() + baixo;
          let [_, nota, bemol, sustenido, tipo, sufixos] = match;
          nota = nota.toUpperCase();
          bemol = bemol || '';
          sustenido = sustenido || '';
          tipo = tipo || '';
          sufixos = sufixos || '';

          // Tratamento especial para sufixos numéricos
          let formattedSufixos = sufixos;
          // Ex: 7913 -> 7(9)(13)
          if (/^7?9?13?$/.test(sufixos)) {
            formattedSufixos = '';
            if (sufixos.includes('7')) formattedSufixos += '7';
            if (sufixos.includes('9')) formattedSufixos += '(9)';
            if (sufixos.includes('13')) formattedSufixos += '(13)';
          } else {
            // Outros sufixos, apenas coloca em maiúsculo
            formattedSufixos = sufixos.toUpperCase();
          }

          if (tipo === 'o') {
            return `${nota}${sustenido}${bemol}°${formattedSufixos}${baixo}`;
          }
          if (tipo === 'm') {
            return `${nota}${sustenido}${bemol}m${formattedSufixos}${baixo}`;
          }
          return `${nota}${sustenido}${bemol}${formattedSufixos}${baixo}`;
        })
        .join(' | ') +
      ' |'
    );
  }
}
