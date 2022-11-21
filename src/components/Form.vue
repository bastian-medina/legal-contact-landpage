<template>
      <div ref="myListRef" class="row justify-center q-gutter-sm">

        <q-page class="column items-center justify-center">
            <q-card class="create-account-card">
            <q-form>

                <q-card-section class="row justify-center">
                    <div class="text-h6">Correo de contacto</div>
                </q-card-section>
                <q-card-section>
                    <div class="text-subtitle1">
                        ¡Envianos un correo de información acerca de tu consulta!
                    </div>
                </q-card-section>


                <q-separator inset />

                <q-card-section class="column q-gutter-md">

                    <q-select
                        label="Motivo"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        v-model="model"
                        :options="options"
                    />

                    <q-input filled label="Nombre Completo *"></q-input>

                    <q-input filled v-model="email" type="email" suffix="@gmail.com"></q-input>

                    <q-input
                        label="Celular"
                        mask="(+56#) ### - ####"
                        fill-mask
                        filled
                        hint="(+56#) ### - ####"
                    ></q-input>

                    <q-editor
                    v-model="message"
                    :definitions="{
                        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
                    }"
                    style="margin-top: 40px;"
                    />

                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat>Cancelar</q-btn>
                    <q-btn color="primary" type="submit">Enviar</q-btn>
                </q-card-actions>
            </q-form>
            </q-card>
        </q-page>

      </div>
  </template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const options = ref([
        'Defensa Penal', 'Juicios de Familia', 'Juicios Laborales', 'Juicios Civiles', 'Juicios de Policia Local',
        'Defensa de consumidores', 'Tramitación de Divorcios', 'Constitución de Sociedades', 'Escrituras Públicas y Privadas'
      ])
</script>
