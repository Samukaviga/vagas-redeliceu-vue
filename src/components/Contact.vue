<template>

  <section id="contato" class="bg-gradient-to-b from-gray-100 to-gray-200 py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-blue-900 mb-4 text-center">Envie o seu currículo</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Venha construir o futuro com a gente!</p>

      <!-- Main Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        <!-- Location Card -->

        <CardContact title="Gerente de Unidade" />
        <CardContact title="Recepção " />
        <CardContact title="Supervisor de Cobrança" />

      </div>

      <!-- Social Media Section -->
      <div class="max-w-6xl mx-auto">
        <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-xl shadow-xl">
          <div class="flex flex-col md:flex-row items-center justify-between md:px-15 gap-6">
            <div class="text-center ">
              <h3 class="text-2xl font-bold text-white mb-2">Siga-nos nas Redes Sociais</h3>
              <p class="text-blue-100">Acompanhe nossas novidades</p>
            </div>
            <div class="flex gap-4 flex-shrink-0">
              <a href="https://www.linkedin.com/company/redeliceu/" target="_blank"
                class="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold inline-flex items-center transition-all hover:scale-105 shadow-lg">

              <font-awesome-icon class="text-2xl mr-2"  :icon="['fab', 'square-linkedin']" />


               linkedin
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import CardContact from './ui/CardContact.vue';


</script>
