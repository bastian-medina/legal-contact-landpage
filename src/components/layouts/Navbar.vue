<template>
      <q-header elevated class="bg-purple" >
        <q-toolbar dense align="justify">
          <q-avatar>
            <img src="../../../public/home.svg">
          </q-avatar>

          <q-toolbar-title>Abogados Santiago - Bufete de Abogados Santiago</q-toolbar-title>
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-tab name="inicio" label="Inicio" @click="goToIndex()" />
          <q-tab name="servicios" label="Servicios" to="/services" @click="goToServices()" />
          <q-tab name="sobreNosotros" label="Sobre Nosotros" to="/aboutUs" @click="goToAboutUs()" />
          <q-tab name="contactanos" label="Contactanos" to="/contactUs" @click="goToContactUs()" />
        </q-tabs>
      </q-header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";

//variables
const tab = ref('inicio')
const route = useRoute();
const router = useRouter();


//methods
const goToIndex = () => {
    router.push("/");
};

const goToServices = () => {
    router.push("/services");
};

const goToAboutUs = () => {
    router.push("/aboutUs");
};

const goToContactUs = () => {
    router.push("/contactUs");
};
</script>
