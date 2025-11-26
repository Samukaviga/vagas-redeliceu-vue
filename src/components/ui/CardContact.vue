<template>

   <div
          class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-blue-900 hover:shadow-xl transition-all hover:scale-105">
          <div class="flex flex-col items-center text-center">
            <div class="bg-blue-900 p-4 rounded-full mb-4">

           <!--
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd" />
              </svg>
           -->

           <font-awesome-icon class="text-2xl text-white" icon="fa-solid fa-briefcase" />


            </div>
            <h3 class="text-2xl font-bold text-blue-900 mb-9">{{ title }}</h3>


            <div class="space-y-2 flex flex-col gap-2 w-full">



              <p class="text-gray-700 text-sm font-bold flex items-center justify-center">


                <svg class="w-4 h-4 text-blue-800 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>


                recrutamento@liceubrasil.com.br
              </p>

              <div>
                <a href="https://wa.me/5511981466892" target="_blank"
                  class="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-semibold inline-flex items-center transition-all hover:scale-105 shadow-md">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Fale Conosco
                </a>
              </div>


            </div>

          </div>
        </div>


</template>

<script setup lang="ts">

  const props = defineProps(['title'])


</script>
