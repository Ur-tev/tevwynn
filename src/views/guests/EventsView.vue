<script setup>
import router from '@/router'
</script>
<template>
  <body class="bg-gray-100 text-gray-800 antialiased">
    <!-- Top Navigation -->
    <header class="bg-white border-b shadow-sm fixed top-0 inset-x-0 z-50">
      <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4">
          <a href="feed.html" class="text-2xl font-bold text-indigo-600">EduConnect</a>
          <div class="hidden md:block">
            <input
              type="text"
              placeholder="Search events…"
              class="w-64 bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button id="profile-button" class="flex items-center focus:outline-none">
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-8 h-8 rounded-full"
              />
            </button>
            <div
              id="profile-dropdown"
              class="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10"
            >
              <a href="profile.html" class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >View Profile</a
              >
              <a href="#settings" class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >Settings</a
              >
              <a href="#logout" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row">
      <!-- Left Sidebar -->
      <aside class="hidden lg:block lg:w-64 bg-white border-r px-4 py-6 space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <nav class="space-y-2">
            <router-link to="/feed" class="flex items-center text-gray-600 hover:text-indigo-600">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 17l4-4-4-4m8 8l-4-4 4-4"
                />
              </svg>
              Feed
            </router-link>
            <router-link
              to="/communities"
              class="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M3 8a4 4 0 014-4 4 4 0 014 4v4a4 4 0 01-4 4 4 4 0 01-4-4V8zM17 8a4 4 0 00-4-4 4 4 0 00-4 4v4a4 4 0 004 4 4 4 0 004-4V8z"
                />
              </svg>
              Communities
            </router-link>
            <router-link
              to="/assignments"
              class="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h6m2 4H7m4 4h2M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                />
              </svg>
              Assignments
            </router-link>
            <router-link to="/events" class="flex items-center text-indigo-600 font-medium">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
                />
              </svg>
              Events
            </router-link>
            <router-link to="/chat" class="flex items-center text-gray-600 hover:text-indigo-600">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                />
              </svg>
              Chat
            </router-link>
            <router-link
              to="/profile"
              class="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A9 9 0 1118.878 6.196a9 9 0 01-13.757 11.608z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profile
            </router-link>
            <router-link
              to="/students_enrollment"
              class="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M20 9a4 4 0 00-4-4 4 4 0 00-4 4v5a4 4 0 004 4 4 4 0 004-4V9zM4 9a4 4 0 014-4 4 4 0 014 4v5a4 4 0 01-4 4 4 4 0 01-4-4V9z"
                />
              </svg>
              Students
            </router-link>
          </nav>
        </div>
      </aside>

      <!-- Main Content: Events table -->
      <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <h1 class="text-2xl font-bold mb-6">Upcoming Events</h1>
        <div class="overflow-x-auto bg-white rounded-lg shadow">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Event
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- Event 1 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Career Fair 2025
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">March 10, 2025</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Main Hall</td>
                <td class="px-6 py-4 text-sm text-gray-700">
                  Meet top companies and explore internship & job opportunities.
                </td>
              </tr>
              <!-- Event 2 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Hackathon
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 2–3, 2025</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Innovation Lab</td>
                <td class="px-6 py-4 text-sm text-gray-700">
                  Collaborate in teams to build projects in 24 hours.
                </td>
              </tr>
              <!-- Event 3 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Guest Lecture: AI in Education
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 15, 2025</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Auditorium</td>
                <td class="px-6 py-4 text-sm text-gray-700">
                  Dr. Emily Zhang discusses the future of AI in learning.
                </td>
              </tr>
              <!-- Event 4 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Spring Festival
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 1, 2025</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Campus Grounds</td>
                <td class="px-6 py-4 text-sm text-gray-700">
                  Celebrate with music, food stalls, and student performances.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </body>
</template>
<style scoped></style>
