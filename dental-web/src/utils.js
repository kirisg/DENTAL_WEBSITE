export const getImageUrl = (path) => {
  return new URL (`/assets/${path}`, import.meta.url).href;
} /*this will dynamically import the image from the assets folder*/;