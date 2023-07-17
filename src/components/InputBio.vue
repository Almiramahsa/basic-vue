<script setup>
import { useBioStore } from '../stores/bio';

const bioStore = useBioStore();

function onSubmitForm() {
  if (bioStore.formData.id === -1) {
    bioStore.bio.push({ ...bioStore.formData });
  } else {
    const index = bioStore.bio.findIndex(item => item.id === bioStore.formData.id);
    if (index !== -1) {
      bioStore.bio[index] = { ...bioStore.formData };
    }
  }
  bioStore.formData = {
    id: -1,
    nama: "",
    alamat: ""
  };
}
</script>

<template>
  <form @submit.prevent="onSubmitForm">
    <input type="text" v-model="bioStore.formData.nama" placeholder="Masukkan Nama" /><br />
    <input type="text" v-model="bioStore.formData.alamat" placeholder="Masukkan Alamat" />
    <button type="submit">Save</button>
  </form>
</template>
