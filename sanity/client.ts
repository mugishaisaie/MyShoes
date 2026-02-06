// sanity/client.ts
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_READ_TOKEN;

export const sanityEnabled =
  !!projectId &&
  projectId !== 'your_project_id_here' &&
  projectId.length > 0;

// Only create client if Sanity is properly configured with a valid projectId
export const client = sanityEnabled && projectId
  ? createClient({
      projectId,
      dataset: dataset || 'production',
      apiVersion: apiVersion || '2024-01-01',
      useCdn: true,
      token,
    })
  : (null as any);
