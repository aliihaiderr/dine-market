import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

// client is used as a bridge between sanity and next.js to access, read and edit data.

export const client = createClient({
  apiVersion : "v2023-07-04",
  dataset : "production",
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token : process.env.SANITY_ACCESS_TOKEN,
  useCdn : true,
})

