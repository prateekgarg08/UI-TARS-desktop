import path from 'path';
import { URL } from 'url';

import { isDev, port } from '@main/env';

export function resolveHtmlPath(htmlFileName: string) {
  if (isDev) {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}