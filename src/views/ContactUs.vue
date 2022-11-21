<template>
    <div class="row justify-center">
      <div class="col-md-3 .col-md-auto">
        <Form />
      </div>
      <div class="col-md-4 .col-md-auto mobile-hide">
        <GoogleMapVue/>
      </div>
    </div>
</template>

<script setup>
import Form from '../components/Form.vue';
import GoogleMapVue from '../components/googleMap.vue';
</script>