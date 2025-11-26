<template>

  <header>
    <!-- Desktop Navigation -->
    <NavBar />

  </header>

  <!-- Main Content -->
  <main class="pt-17 md:pt-17 ">
    <!-- Hero Section -->



    <Contact />

    <!-- Pais e Alunos Section -->

  </main>

  <!-- Floating WhatsApp Button -->



  <footer class="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16">
    <Footer />
  </footer>


</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavBar from '@/components/NavBar.vue'
//import BannerMain from '@/components/BannerMain.vue'
import BannerMainTwo from '@/components/BannerMainTwo.vue'
import Staps from '@/components/Staps.vue'
import Contact from '@/components/Contact.vue'
import Differential from '@/components/Differential.vue'
import Infrastructure from '@/components/Infrastructure.vue'
import About from '@/components/About.vue'
import ParentsStudents from '@/components/ParentsStudents.vue'
import Footer from '@/components/Footer.vue'
import ButtonWtt from '@/components/ButtonWtt.vue'



onMounted(() => {
  initFlowbite()
})


</script>

<style>
.texto-principal {
  -webkit-text-stroke-width: 2px;
  /* largura da borda */
  -webkit-text-stroke-color: #ff7b16;
  /* cor da borda */
}

.texto-secundario {
  -webkit-text-stroke-width: 0.5px;
  /* largura da borda */
  -webkit-text-stroke-color: #9ffdff;
  /* cor da borda */
}

.bg-laranja-escuro {
  background-color: #00139f;
}


.bg-laranja-escuro:hover {
  background-color: #3041f8;
}

.bg-azul-claro {
  background-color: #9ffdff;
}

.text-laranja-escuro {
  color: #b90002;
}

.text-amarelo {
  color: #ffc500;
}

.text-azul-claro {
  color: #9ffdff;
}

.text-azul-escuro {
  color: #009ab6;
}

.text-laranja-escuro-hover:hover {
  color: #b90002;
}
</style>
