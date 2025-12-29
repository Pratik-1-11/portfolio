export const getImagePath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};
