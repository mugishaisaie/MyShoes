'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
// This imports the schema you have in your sanity/schemas folder
import { schemaTypes } from './sanity/schemas' 

// ⬇️ THIS IS HOW IT READS FROM YOUR .ENV.LOCAL
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'My Shoes Rwanda',
  basePath: '/studio', 
  projectId, // <--- It uses the variable here
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})