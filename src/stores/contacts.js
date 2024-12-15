// src/stores/contacts.js
import { defineStore } from "pinia";
import { reactive, watch, ref } from "vue";

export const useContactsStore = defineStore("contacts", () => {
  const contacts = reactive(
    JSON.parse(localStorage.getItem("contacts")) || [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+123 456 789",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        phone: "+987 654 321",
      },
    ]
  );

  watch(
    contacts,
    (newContacts) => {
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    { deep: true }
  );

  return {
    contacts,
  };
});
