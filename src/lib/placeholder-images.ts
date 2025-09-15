export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

import data from './placeholder-images.json';

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
