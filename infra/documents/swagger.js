/* eslint-disable no-dupe-keys */

import paths from './paths.js'

export default
{
  swagger: '2.0',
  info: {
    title: 'DP Inventory API',
    description: 'Project documentation Inventory API from DP',
    version: '1.0.0'
  },
  host: process.env.API_URL,
  paths
}
