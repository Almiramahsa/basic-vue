import { defineStore } from "pinia";
import { ref } from 'vue';

export const useBioStore = defineStore('alamat', () => {
  const bio = ref([
    {
      id: 1,
      nama: 'Almira',
      alamat: 'Surabaya'
    },
    {
      id: 2,
      nama: 'Farid',
      alamat: 'Palu'
    }
  ]);

  const formData = ref({
    id: -1,
    nama: "",
    alamat: ""
  });

  return {
    bio,
    formData
  };
});
