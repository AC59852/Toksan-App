
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue'), name: "Home" },
      { path: '/anime', component: () => import('pages/Anime.vue'), name: "Anime" },
      { path: '/search', component: () => import('pages/Search.vue'), name: "Search" },
      { path: '/anime/:name', component: () => import('pages/Anime-Specific.vue'), name: "" },
      { path: '/:name/characters', component: () => import('pages/Anime-Characters.vue'), name: "Characters" },
      { path: '/:name/:character', component: () => import('pages/Character-Specific.vue'), name: "" },
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
