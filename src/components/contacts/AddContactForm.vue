<!-- src/components/addContact.vue -->
<script setup>
import { ref } from "vue";
import { useContactsStore } from "@/stores/contacts";
import { useRouter } from "vue-router";

const contactsStore = useContactsStore();
const router = useRouter();
const addContact = contactsStore.addContact;

const name = ref("");
const email = ref("");
const phone = ref("");

const handleSubmit = () => {
  addContact({
    name: name.value,
    email: email.value,
    phone: phone.value,
  });

  router.push("/");
};
</script>

<template>
  <form id="contact-form" class="space-y-4" @submit.prevent="handleSubmit">
    <div>
      <label for="name" class="block text-sm font-medium">Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="John Doe"
        class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="johndoe@example.com"
        class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label for="phone" class="block text-sm font-medium">Phone</label>
      <input
        type="tel"
        id="phone"
        v-model="phone"
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
</template>
