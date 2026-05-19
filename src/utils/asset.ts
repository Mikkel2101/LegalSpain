const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const img = (path: string) =>
  `${base}${path.startsWith('/') ? path : '/' + path}`;
