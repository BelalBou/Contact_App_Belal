<script setup>
import { defineProps } from "vue";
import { useContactsStore } from "@/stores/contacts";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  contact: Object,
});

const editContact = (id) => {
  router.push({ name: "AddContact", params: { id: props.contact.id } });
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
        class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
        @click="editContact"
      >
        Edit
      </button>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </li>
</template>
