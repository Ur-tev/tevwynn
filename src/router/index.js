import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'Login', component: () => import('@/views/guests/LoginView.vue') },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/views/guests/RegistrationView.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/guests/ProfileView.vue'),
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: () => import('@/views/guests/AssignmentsView.vue'),
    },
    { path: '/chat', name: 'Chat', component: () => import('@/views/guests/ChatView.vue') },
    { path: '/events', name: 'Events', component: () => import('@/views/guests/EventsView.vue') },
    {
      path: '/communities',
      name: 'Communities',
      component: () => import('@/views/guests/CommunitiesView.vue'),
    },
    {
      path: '/feed',
      name: 'Feed',
      component: () => import('@/views/guests/FeedView.vue'),
    },
    { path: '/index', name: 'Index', component: () => import('@/views/guests/IndexView.vue') },
    {
      path: '/create_course',
      name: 'Create_course',
      component: () => import('@/views/guests/Create_courseView.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/guests/SettingsView.vue'),
    },
    {
      path: '/students_enrollment',
      name: 'Students_enrollment',
      component: () => import('@/views/guests/Student_enrollmentView.vue'),
    },
    {
      path: '/edit_profile',
      name: 'Edit_profile',
      component: () => import('@/views/guests/Edit_profileView.vue'),
    },
  ],
})

export default router
