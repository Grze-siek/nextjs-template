'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.cli';

function onPublicAccessOnly() {
  throw new Error(
    'Nie mona wczytać preview mode poniewa nie jesteś zalogowany'
  );

  if (!projectId || !dataset) {
    throw new Error('Brakuje projectId lub dataset');
  }
}

export const usePreview = definePreview({
  projectId: projectId!,
  dataset: dataset!,
  onPublicAccessOnly,
});
