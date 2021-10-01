<template>
  <section id="characters">
    <swiper 
    :slides-per-view="1"
    :space-between="0"
    :loop="true"
    :pagination="true"
    >
      <swiper-slide class="slide"
        v-for="slideContent in content"
        :key="slideContent.id"
        :virtualIndex="slideContent.id"
      >
        <div class="card">
          <div class="card_imgCon">
            <img :src="slideContent.card_img" alt="" class="card_img">
          </div>
          <div class="card_contentCon">
              <h2 v-resize-text="{ratio: slideContent.fontRatio}" class="card_heading">{{ slideContent.first_name }}</h2>
              <p class="card_para">{{ slideContent.bio }}</p>
          </div>
          <div class="card_footer">
            <router-link 
              :to=" '/' + this.$route.params.name + '/characters/' + slideContent.full_name"
              class="card_link"
            >
              Read More
            </router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
          <div class="card">
            <h1>All Characters</h1>
          </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
  import { Virtual } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import "swiper/css/pagination";
  import "../css/modules/_characters.scss";
  import VueResizeText from 'vue3-resize-text'
  
  import SwiperCore, {
      Pagination
    } from 'swiper';

    SwiperCore.use([Pagination]);

  export default {

    directives: {
      ResizeText: VueResizeText.ResizeText
    },

    data() {
        return {
            api: 'https://toksan-wi-default-rtdb.firebaseio.com/anime/',

            slides: [
                {id: 1, data: 'test'},
                {id: 2, data: 'test'},
                {id: 3, data: 'test'},
            ],

            content: {}
        }
    },

    components: {
      Swiper,
      SwiperSlide,
    },

    created() {
        this.getContent(this.$route.params.name);
    },

    mounted() {
    },

    methods: {
        async getContent(name) {
            await fetch(this.api + name + '/characters.json')
              .then(res => res.json())
              .then(data => this.content = data)
        }
    },

    setup() {
      return {
        Virtual,
      };
    },
  };
</script>