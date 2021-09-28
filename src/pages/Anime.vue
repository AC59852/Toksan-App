<template>
  <section>
    <h4>This is the Anime Page</h4>
    <swiper
    :slides-per-view="'auto'"
    :space-between="20"
    :centeredSlides="true"
    :loop="true"
    :pagination="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="slide">
      <div class="card">
        <h1>Character Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis facere asperiores ea quod voluptatum repudiandae facilis quae aspernatur exercitationem maiores nisi adipisci placeat reiciendis, tempore harum ducimus, enim veniam!</p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <div class="card">
        <h1>Character Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis facere asperiores ea quod voluptatum repudiandae facilis quae aspernatur exercitationem maiores nisi adipisci placeat reiciendis, tempore harum ducimus, enim veniam!</p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <div class="card">
        <h1>Character Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis facere asperiores ea quod voluptatum repudiandae facilis quae aspernatur exercitationem maiores nisi adipisci placeat reiciendis, tempore harum ducimus, enim veniam!</p>
      </div>
    </swiper-slide>
  </swiper>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";

import "../css/modules/_test.scss";

import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export default defineComponent({
  name: 'PageIndex',

  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
})
</script>
