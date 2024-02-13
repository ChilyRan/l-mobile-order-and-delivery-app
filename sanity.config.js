import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
    // ...
    plugins: [
        deskTool(),
        visionTool({
            defaultApiVersion: 'v2021-03-25',
            defaultDataset: 'development',
        }),
    ],
})