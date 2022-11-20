<template>
    <br><br>
    <div class="q-pa-md">
        <div class="row justify-center q-gutter-sm">
            <h4 class="q-display-2">Tipos de Estudios Juridicos</h4>
        </div>
      <div ref="myListRef" class="row justify-center q-gutter-sm">


        <q-intersection
          v-for="item, index in items"
          :key="index"
          :root="listEl"
          once
          transition="scale"
          class="col-md-3 .col-md-auto"
        >
            <q-card class="q-ma-sm">
                <q-img :src="item.url" />

                <q-card-section>
                    <div class="fontsize-12 text-weight-bold">{{ item.titleCard }}</div>
                    <div class="text-caption text-grey">{{ item.informationCard }}</div>
                </q-card-section>

                <q-card-actions vertical align="center">
                    <q-btn push color="primary" text-color="white" :label="item.buttonCard" />
                </q-card-actions>
            </q-card>
        </q-intersection>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, computed } from 'vue'
  
const myListRef = ref(null)
const items = ref([
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/abogados-defensores-penales-puerto-montt-e3423656a3520cb9a9825048b5cb59aa.png",
        titleCard: "Defensa Penal",
        informationCard: "Somos un equipo de abogados defensores particulares que entregan asistencia jurídica, representación y defensa, a personas imputadas y privadas de libertad, durante todo el proceso penal ante las Fiscalías, Juzgado de Garantía, Tribunales Orales en lo Penal y Tribunales Superiores de Justicia. Servicio Profesional 100% Confidencial.",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/abogados-de-familia-6da37dd3139aa4d9aa55b8d237ec5d4a.jpg",
        titleCard: "JUICIOS DE FAMILIA",
        informationCard: "Demandas de Pensiones de Alimentos, Demandas de Aumento, Rebaja, y Cese de Alimentos, Divorcios Mutuo Acuerdo, Culposos, y Unilaterales, Autorización para Salir del País de Menores, Demandas y Defensas por Violencia Intrafamiliar (VIF), Declaraciones de Bien Familiar, Otros servicios ante el Juzgado de Familia",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/abogados-laborales-bba321cd21fd697cc21b5beaab2e0193.jpg",
        titleCard: "JUICIOS LABORALES",
        informationCard: "Demandas de Vulneraciones de Derechos Fundamentales, Demandas de Indemnizaciones por Accidentes del trabajo, Demandas por Despido Injustificado, Demandas de nulidad de despido por no pago de cotizaciones (Ley Bustos), Demandas de Desafuero, Redacción de Contratos de Trabajo.",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/juicios-civiles-2fc1df7ac6e00ffac3509b070b117ddc.jpg",
        titleCard: "JUICIOS CIVILES",
        informationCard: "Acciones Reivindicatorias, Particiones de herencia, Posesiones efectivas testamentarios y no testamentarias, Demandas de precario, Juicios de arriendo, Indemnizaciones de perjuicios, Defensa de deudores, Tercerías, Gestiones no contenciosas civiles, Cambios de nombre, Declaraciones de interdicción, Autorización de segundas nupcias, Testamentos, Adjudicaciones",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/juicios-de-policia-local-c996b6b8a8de8ba0039fed4a7c158e32.jpg",
        titleCard: "JUICIOS DE POLICÍA LOCAL",
        informationCard: "Querellas por accidentes de tránsito y daños en colisión, Demandas por Indemnizaciones de daños en colisión, Defensa judicial por Infracciones a la Ley de Bosques (Conaf), Demandas por Infracciones a la Ley del Consumidor",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/defensa-de-consumidores-00660dc0beb9f1ec13a4608711e3b18f.jpg",
        titleCard: "DEFENSA DE CONSUMIDORES",
        informationCard: "Tramitación de demandas judiciales por infracción a la Ley del Consumidor, ante Juzgados de Policía y alrededores: Querellas infraccionales por infracción a las normas de protección al consumidor, Defensa judicial de Consumidores, Demandas de indemnizaciones por daño emergente y/o daño moral",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/tramitacion-de-divorcios-puerto-montt-3d107802f6434b95a0ef95b7d880b1ad.jpg",
        titleCard: "TRAMITACIÓN DE DIVORCIOS",
        informationCard: "Divorcios Unilaterales, Divorcios Común Acuerdo, Divorcios Culposos, Compensaciones Económicas, Separaciones Judiciales, Liquidaciones de Sociedad Conyugal, Separaciones de Bienes",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/sociedades-empresas-a6e842dce99aa528746b6e44f6f79dd0.jpg",
        titleCard: "CONSTITUCIÓN DE SOCIEDADES",
        informationCard: "Sociedades por acciones (SpA), Sociedades de responsabilidad limitada (Ltda.), Empresas individuales de responsabilidad limitada (E.I.R.L), Sociedades anónimas (S.A.), Sociedades civiles, Disolución de Sociedades, Modificaciones de Razón Social y Marca, Liquidación de Sociedades, Modificaciones de Capital Social, Cesión de Acciones y Derechos, Fusión de Sociedades",
        buttonCard: "Ver más"
    },
    {
        url: "https://www.defensaspuertomontt.cl/upload/servicio/galeria/normal/escrituras-publicas-y-privadas-95af518bc409baa9f881effcb2294470.png",
        titleCard: "ESCRITURAS PÚBLICAS Y PRIVADAS",
        informationCard: "Escrituras de compraventa de propiedades, Promesas de compraventa de propiedades, Cesiones de derechos Puerto Montt, Arrendamientos de bienes urbanos y rurales, Constitución de usufructos, Poderes generales y especiales, Hipotecas y otras garantías, Reducciones de escritura pública, Contratos de Trabajo y Finiquitos",
        buttonCard: "Ver más"
    },
])
const listEl = computed(() => myListRef.value ? myListRef.value.$el : null)

</script>
  
  <style scoped>
  .example-item {
    height: 290px;
    width: 290px;
  }
  </style>
  