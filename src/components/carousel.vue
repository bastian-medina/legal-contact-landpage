<template>
      <q-carousel
        animated
        infinite
        swipeable
        arrows
        v-model="slide"
        height="460px"
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://i.ibb.co/T8FkjK2/hammer.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Estudios Jurídicos</div>
            <div class="text-subtitle1">Confidencialidad y compromiso</div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" img-src="https://i.ibb.co/yqyCf9n/legal.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Defensa Judicial</div>
            <div class="text-subtitle1">Prestación de servicios</div>
          </div>
        </q-carousel-slide>
        
        <q-carousel-slide :name="3" img-src="https://i.ibb.co/gRgwQQy/right.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Documentación Judicial</div>
            <div class="text-subtitle1">Archivos históricos y antecedentes</div>
          </div>
        </q-carousel-slide>
        
        <q-carousel-slide :name="4" img-src="https://i.ibb.co/84KgrxZ/law.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Abogados Expertos</div>
            <div class="text-subtitle1">Contáctenos y agende su hora de atención</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
  </template>
  
<script setup>
import { ref } from 'vue'
  
const slide = ref(1)
const autoplay = ref(true)
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
