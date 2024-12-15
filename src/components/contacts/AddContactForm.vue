<script setup>
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useContactsStore } from "@/stores/contacts";
import { toast } from "vue3-toastify";

const newContact = reactive({
  id: null,
  name: "",
  email: "",
  phone: "",
});

const router = useRouter();
const route = useRoute();
const contactsStore = useContactsStore();

onMounted(() => {
  if (route.params.id) {
    const contact = contactsStore.contacts.find(
      (contact) => contact.id === parseInt(route.params.id)
    );
    if (contact) {
      newContact.id = contact.id;
      newContact.name = contact.name;
      newContact.email = contact.email;
      newContact.phone = contact.phone;
    }
  }
});

const saveContact = async () => {
  let success = false;

  if (newContact.id) {
    success = contactsStore.updateContact({ ...newContact });
  } else {
    newContact.id = Date.now();
    success = contactsStore.addContact({ ...newContact });
  }

  newContact.name = "";
  newContact.email = "";
  newContact.phone = "";

  await router.push({ name: "Dashboard" });

  if (success) {
    toast.success("Contact enregistré avec succès !");
  } else {
    toast.error("Échec de l'enregistrement du contact.");
  }
};
</script>

<template>
  <main class="container mx-auto px-4 mt-6 flex-grow">
    <div class="flex flex-col lg:flex-row gap-6">
      <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">
          {{ newContact.id ? "Edit" : "Add" }} Contact
        </h2>
        <form @submit.prevent="saveContact" class="space-y-4">
          <div>
            <label for="name" class="block font-bold">Name:</label>
            <input
              id="name"
              v-model="newContact.name"
              type="text"
              class="w-full border rounded p-2"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label for="email" class="block font-bold">Email:</label>
            <input
              id="email"
              v-model="newContact.email"
              type="email"
              class="w-full border rounded p-2"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label for="phone" class="block font-bold">Phone:</label>
            <input
              id="phone"
              v-model="newContact.phone"
              type="tel"
              class="w-full border rounded p-2"
              placeholder="Enter phone number"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            {{ newContact.id ? "Update Contact" : "Save Contact" }}
          </button>
        </form>
      </section>
    </div>
  </main>
</template>
