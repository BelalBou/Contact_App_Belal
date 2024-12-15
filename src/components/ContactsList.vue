<script setup>
import ContactsListItem from "@/components/ContactsListItem.vue";
const props = defineProps({
  contacts: Object,
});
</script>

<template>
  <ul id="contacts-list" class="divide-y divide-gray-200">
    <ContactsListItem
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
    />
  </ul>
</template>
