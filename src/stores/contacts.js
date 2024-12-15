// src/stores/contacts.js
import { defineStore } from "pinia";
import { reactive, watch, ref } from "vue";

export const useContactsStore = defineStore("contacts", () => {
  const contacts = reactive(
    JSON.parse(localStorage.getItem("contacts")) ||
      [
        // {
        //   id: 1,
        //   name: "John Doe",
        //   email: "johndoe@example.com",
        //   phone: "+123 456 789",
        // },
        // {
        //   id: 2,
        //   name: "Jane Smith",
        //   email: "janesmith@example.com",
        //   phone: "+987 654 321",
        // },
      ]
  );

  const addContact = (contact) => {
    contact.id = Date.now();
    contacts.push(contact);
  };

  watch(
    contacts,
    (newContact, oldContact) => {
      localStorage.setItem("contacts", JSON.stringify(newContact));
    },
    { deep: true }
  );

  return {
    contacts,
    addContact,
  };
});
