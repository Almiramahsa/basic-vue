<script setup>
import { useBioStore } from '../stores/bio';

const bioStore = useBioStore();

function onClickEdit(index) {
  console.log(index);
  bioStore.formData = { ...bioStore.bio[index] };
}
</script>

<template>
  <div class="border p-3">
    <table border="0.5">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bio, index) in bioStore.bio" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ bio.nama }}</td>
          <td>{{ bio.alamat }}</td>
          <td>
            <button @click="onClickEdit(index)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
