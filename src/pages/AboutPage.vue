<template>
  <q-page padding class="justify-center">
    <div padding class="row">
      <div class="col-auto">
        <div class="q-py-md q-ma-xl">
          <h3 class="text-weight-light">Fontys Line Array</h3>
          <h4 text-color="pantone">Try me!</h4>
        </div>
      </div>
      <div class="col-lg">
        <q-carousel
          color="white"
          arrows
          infinite
          autoplay
          height="60vh"
        >

          <q-carousel-slide>
            <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/uZ2moL-i1MY"
            />
          </q-carousel-slide>
          <q-carousel-slide
            v-for="(img, index) in images"
            :key="index"
            :img-src="'statics/img/' + img + '-min.jpg'"
          >
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {

    }
  },
  computed: {
    images () {
      var imgArray = []
      for (var i = 1; i <= 30; i++) {
        imgArray.push('img' + i)
      }

      return imgArray
    }
  }
}
</script>

<style>
</style>
