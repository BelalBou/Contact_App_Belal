import { defineStore } from "pinia";
import { reactive, watch, computed, ref } from "vue";

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
      {
        id: 3,
        name: "Alice Johnson",
        email: "alicej@example.com",
        phone: "+111 222 333",
      },
    ]
  );

  const searchQuery = reactive({ value: "" });

  const filteredContacts = computed(() => {
    if (!searchQuery.value) return contacts;

    return contacts.filter((contact) => {
      const searchLower = searchQuery.value.toLowerCase();
      return (
        contact.name.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower)
      );
    });
  });

  const addContact = (contact) => {
    contacts.unshift(contact);
    toast.success("Contact ajouté avec succès !");
  };

  const updateContact = (updatedContact) => {
    const index = contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      contacts[index] = updatedContact;
      toast.success("Contact mis à jour avec succès !");
    } else {
      toast.error("Erreur de mise à jour du contact.");
    }
  };

  const deleteOneById = (id) => {
    const index = contacts.findIndex((item) => item.id == id);
    if (index !== -1) {
      contacts.splice(index, 1);
      toast.success("Contact supprimé avec succès.");
    } else {
      toast.error("Erreur lors de la suppression du contact.");
    }
  };

  watch(
    contacts,
    (newContacts) => {
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    { deep: true }
  );

  return {
    contacts,
    searchQuery,
    filteredContacts,
    addContact,
    updateContact,
    deleteOneById,
  };
});
