import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'coachello'

export const client = prismic.createClient(repositoryName, {
    // If your repository is private, add an access token
    accessToken: 'MC5ZcUx2M1JJQUFDUUFTbHpw.77-9CC8zRxdMZE7vv73vv70wYu-_vSQN77-977-977-9InEaUj1M77-977-9Ye-_ve-_vWFz',

    // This defines how you will structure URL paths in your project.
    // Update the types to match the Custom Types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    routes: [

    ],
})
