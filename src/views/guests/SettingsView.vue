<script setup></script>
<template>
  <body class="bg-gray-100 text-gray-800 antialiased">
    <!-- Top Navigation Bar -->
    <header class="bg-white border-b shadow-sm fixed top-0 inset-x-0 z-50">
      <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4">
          <a href="feed.html" class="text-2xl font-bold text-indigo-600">EduConnect</a>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button id="profile-button" class="flex items-center focus:outline-none">
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="User avatar"
                class="w-8 h-8 rounded-full"
              />
            </button>
            <div
              id="profile-dropdown"
              class="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10"
            >
              <router-link to="/profile" class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >View Profile</router-link
              >
              <router-link to="/settings" class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >Settings</router-link
              >
              <router-link to="/login" class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >Log Out</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Layout wrapper -->
    <div class="pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row">
      <!-- Left Sidebar -->
      <aside class="hidden lg:block lg:w-64 bg-white border-r px-4 py-6 space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <nav class="space-y-2">
            <router-link to="/feed." class="flex items-center text-gray-600 hover:text-indigo-600">
              Feed
            </router-link>
            <router-link
              to="/communities"
              class="flex items-center text-gray-600 hover:text-indigo-600"
            >
              Communities
            </router-link>
            <router-link
              to="/assignments"
              class="flex items-center text-gray-600 hover:text-indigo-600"
            >
              Assignments
            </router-link>
            <router-link to="/events" class="flex items-center text-gray-600 hover:text-indigo-600">
              Events
            </router-link>
            <router-link to="/chat" class="flex items-center text-gray-600 hover:text-indigo-600">
              Chat
            </router-link>
          </nav>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <section class="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 class="text-xl font-semibold text-gray-800">Account Settings</h2>

          <!-- Profile Info -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Profile Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  value="Alex Johnson"
                  class="w-full mt-1 p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  value="alex.johnson@example.com"
                  class="w-full mt-1 p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600">Username</label>
                <input
                  type="text"
                  value="alexjohnson"
                  class="w-full mt-1 p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  value="••••••••"
                  class="w-full mt-1 p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <router-link
              to="/profile"
              class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </router-link>
          </div>

          <!-- Notifications -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Notifications</h3>
            <div class="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" checked class="w-5 h-5 text-indigo-600 rounded focus:ring-0" />
            </div>
            <div class="flex items-center justify-between">
              <span>Push Notifications</span>
              <input type="checkbox" class="w-5 h-5 text-indigo-600 rounded focus:ring-0" />
            </div>
            <div class="flex items-center justify-between">
              <span>Message Alerts</span>
              <input type="checkbox" checked class="w-5 h-5 text-indigo-600 rounded focus:ring-0" />
            </div>
          </div>

          <!-- Privacy -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Privacy</h3>
            <div class="flex items-center justify-between">
              <span>Show Profile Publicly</span>
              <input type="checkbox" class="w-5 h-5 text-indigo-600 rounded focus:ring-0" />
            </div>
            <div class="flex items-center justify-between">
              <span>Allow Friend Requests</span>
              <input type="checkbox" checked class="w-5 h-5 text-indigo-600 rounded focus:ring-0" />
            </div>
          </div>
        </section>
      </main>

      <!-- Right Sidebar (Optional: Profile Quick Info) -->
      <aside class="hidden xl:flex xl:flex-col xl:w-72 border-l bg-white px-4 py-6">
        <h3 class="text-lg font-semibold mb-4">Quick Access</h3>
        <ul class="space-y-3 text-gray-700">
          <li>
            <router-link to="/profile" class="hover:text-indigo-600">View Profile</router-link>
          </li>
          <li>
            <router-link to="/settings" class="hover:text-indigo-600">Account Settings</router-link>
          </li>
        </ul>
      </aside>
    </div>
  </body>
</template>
<style scoped></style>
