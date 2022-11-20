<template>
  <q-footer reveal bordered class="bg-grey-6 text-white">
    <q-toolbar class="bg-grey-6 text-white">
      
      <q-btn-dropdown stretch flat label="Contactos">
        <q-list>


          <q-item-label header>Correo</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="email" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Correo principal</q-item-label>
              <q-item-label caption>abogado@judicial.cl</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator  />


          <q-item-label header>Redes Sociales</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <q-avatar icon="facebook" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Facebook</q-item-label>
              <q-item-label caption>abogadosFacebook</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-btn-dropdown>

      <q-space />

      <q-list dark separator style="max-width: 318px">
        <q-item v-ripple>
          <q-item-section>
            <q-item-label>Horarios de atención:</q-item-label>
            <q-item-label caption>- 9:00 a 13:00 Hrs</q-item-label>
            <q-item-label caption>- 15:00 a 18:00 Hrs</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-space/>
      <q-list dark separator style="max-width: 318px">
        <q-item v-ripple>
          <q-item-section>
            <q-item-label>Dirección:</q-item-label>
            <q-item-label caption>Huerfanos 335, 5to piso, Oficina #505, Santiago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-space/>
      <q-list dark separator style="max-width: 318px">
        <q-item v-ripple>
          <q-item-section>
            <q-item-label caption>© Abogados en Santiago | Desarrollado por BM</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-toolbar>
</q-footer>
</template>