export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e125d232f01282b5db0e959',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a4r89qdn',
                  apiId: '0098643e-2971-4fa9-b967-c56b8c0e41e9'
                },
                {
                  buildHookId: '5e125d23898951a866ed5053',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bahp3v7x',
                  apiId: '503ac8bb-6dc9-433c-b02a-ac888f256f0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muffeeee/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bahp3v7x.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
