<script setup></script>
<template>
  <body class="bg-gray-100 text-gray-800 antialiased">
    <!-- Top Navigation -->
    <header class="bg-white border-b shadow-sm fixed top-0 inset-x-0 z-50">
      <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4">
          <a href="feed.html" class="text-2xl font-bold text-indigo-600">EduConnect</a>
        </div>
        <div class="flex items-center space-x-4">
          <router-link to="/profile" class="text-sm text-indigo-600 hover:underline"
            >Back to Profile</router-link
          >
        </div>
      </div>
    </header>

    <div class="pt-20 max-w-5xl mx-auto flex flex-col lg:flex-row">
      <!-- Sidebar -->
      <aside class="hidden lg:block lg:w-64 bg-white border-r px-4 py-6 space-y-8">
        <h3 class="text-lg font-semibold mb-4">Navigation</h3>
        <nav class="space-y-2">
          <router-link to="/feed" class="block text-gray-600 hover:text-indigo-600"
            >Feed</router-link
          >
          <router-link to="/communities" class="block text-gray-600 hover:text-indigo-600"
            >Communities</router-link
          >
          <router-link to="/assignments" class="block text-gray-600 hover:text-indigo-600"
            >Assignments</router-link
          >
          <router-link to="/events" class="block text-gray-600 hover:text-indigo-600"
            >Events</router-link
          >
          <router-link to="/chat" class="block text-gray-600 hover:text-indigo-600"
            >Chat</router-link
          >
          <router-link to="/profile" class="block text-indigo-600 font-medium">Profile</router-link>
        </nav>
      </aside>

      <!-- Edit Profile Form -->
      <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-6">Edit Profile</h2>
          <form class="space-y-6">
            <!-- Avatar Upload -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
              <div class="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=128&h=128&q=80"
                  alt="Avatar"
                  class="w-20 h-20 rounded-full border"
                />
                <input type="file" class="text-sm text-gray-600" />
              </div>
            </div>

            <!-- Cover Upload -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
              <input type="file" class="text-sm text-gray-600" />
            </div>

            <!-- Basic Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value="Alex Johnson"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value="alex.johnson@example.edu"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value="Manila, Philippines"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Year</label>
                <select
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Freshman</option>
                  <option>Sophomore</option>
                  <option selected>Junior</option>
                  <option>Senior</option>
                </select>
              </div>
            </div>

            <!-- About Me -->
            <div>
              <label class="block text-sm font-medium text-gray-700">About Me</label>
              <textarea
                rows="4"
                class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
              I’m a third-year computer science student passionate about artificial intelligence and machine learning.</textarea
              >
            </div>

            <!-- Interests & Skills -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Interests</label>
                <input
                  type="text"
                  value="AI, Robotics, Music"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Skills</label>
                <input
                  type="text"
                  value="Python, C++, React"
                  class="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <!-- Save Button -->
            <div class="flex justify-end">
              <router-link
                to="/profile"
                class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
              >
                Save Changes
              </router-link>
            </div>
          </form>
        </div>
      </main>
    </div>
  </body>
</template>
<style scoped></style>
