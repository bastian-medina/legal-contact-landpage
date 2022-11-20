<template>
      <q-header elevated class="bg-purple" >
        <q-toolbar dense align="justify">
          <q-avatar>
            <img src="../../../public/home.svg">
          </q-avatar>

          <q-toolbar-title>Abogados Santiago - Bufete de Abogados Santiago</q-toolbar-title>
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-route-tab name="inicio" label="Inicio" to="/" />
          <q-route-tab name="servicios" label="Servicios" to="/services" />
          <q-route-tab name="sobreNosotros" label="Sobre Nosotros" to="/aboutUs" />
          <q-route-tab name="contactanos" label="Contactanos" to="/contactUs" />
        </q-tabs>
      </q-header>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('inicio')
</script>
