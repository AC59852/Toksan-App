
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/anime', component: () => import('pages/Anime.vue') },
      { path: '/manga', component: () => import('pages/Manga.vue') },
      { path: '/search', component: () => import('pages/Search.vue') },
      { path: '/anime/:name', component: () => import('pages/Anime-Specific.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
