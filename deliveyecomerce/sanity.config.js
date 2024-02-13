import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'DeliveyEcomerce',

  projectId: '7a0iwsdp',
  dataset: 'deliveyecomerce',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
