<script setup>
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useContactsStore } from "@/stores/contacts";
import { toast } from "vue3-toastify";

const router = useRouter();
const route = useRoute();
const contactsStore = useContactsStore();

const currentContact = reactive({
  id: null,
  name: "",
  email: "",
  phone: "",
});

onMounted(() => {
  if (route.params.id) {
    const contact = contactsStore.contacts.find(
      (contact) => contact.id === parseInt(route.params.id)
    );
    if (contact) {
      currentContact.id = contact.id;
      currentContact.name = contact.name;
      currentContact.email = contact.email;
      currentContact.phone = contact.phone;
    }
  }
});

const saveContact = async () => {
  let success = false;

  if (currentContact.id) {
    success = contactsStore.updateContact({ ...currentContact });
  } else {
    currentContact.id = Date.now();
    success = contactsStore.addContact({ ...currentContact });
  }

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
          {{ currentContact.id ? "Edit" : "Add" }} Contact
        </h2>
        <form @submit.prevent="saveContact" class="space-y-4">
          <div>
            <label for="name" class="block font-bold">Name:</label>
            <input
              id="name"
              v-model="currentContact.name"
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
              v-model="currentContact.email"
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
              v-model="currentContact.phone"
              type="tel"
              class="w-full border rounded p-2"
              placeholder="Enter phone number"
              pattern="^\+?[0-9]+$"
              title="Le numéro de téléphone peut commencer par + suivi de chiffres uniquement."
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            {{ currentContact.id ? "Update Contact" : "Save Contact" }}
          </button>
        </form>
      </section>
    </div>
  </main>
</template>
