<script setup>
import { useContactsStore } from "@/stores/contacts";
import { useRouter } from "vue-router";

const props = defineProps({
  contact: {
    type: Object,
  },
});

const contactsStore = useContactsStore();
const router = useRouter();

const editContact = (id) => {
  router.push({ name: "AddContact", params: { id } });
};
</script>

<template>
  <li class="md:flex items-center justify-between py-4">
    <div class="pb-4 md:pb-0">
      <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
      <p class="text-gray-500">{{ contact.email }}</p>
      <p class="text-gray-500">{{ contact.phone }}</p>
    </div>
    <div class="flex gap-2">
      <button
        @click="editContact(contact.id)"
        class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
      >
        Edit
      </button>
      <button
        @click.prevent="contactsStore.deleteOneById(contact.id)"
        class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </li>
</template>
