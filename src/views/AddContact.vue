<script setup></script>

<template>
  <!-- Main Content -->
  <main class="container mx-auto px-4 mt-6 flex-grow">
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Contact Form Section -->
      <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Add / Edit Contact</h2>
        <form id="contact-form" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="+123 456 789"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Save Contact
          </button>
        </form>
      </section>
    </div>
  </main>
</template>
