import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../schemas';
import { myTheme } from './theme';
import StudioNavbar from '../components/Studio/StudioNavbar';
import { getDefaultDocumentNode } from './structure';
import { media } from 'sanity-plugin-media';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const path = process.env.NEXT_PUBLIC_SANITY_PATH!;

export default defineConfig({
  basePath: path,
  name: 'name',
  title: 'title',
  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
