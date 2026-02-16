import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'k8lbv5dd',
    dataset: 'production'
  },
  deployment: {
    // This ID connects your local code to the Sanity project
    appId: 'k8lbv5dd', 
    autoUpdates: true,
  },
  // This defines your URL: https://ihsan-bento.sanity.studio
  studioHost: 'ihsan-bento' 
})