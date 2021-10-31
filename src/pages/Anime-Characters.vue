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
      <div class="char_bck">
        <div class="char_img" :style="{backgroundImage: 'url(' + slideContent.card_bck + ')'}"></div>
      </div>
        <div class="card">
          <div class="card_imgCon">
            <img :src="slideContent.card_img" alt="" class="card_img">
          </div>
          <div class="card_contentCon">
              <h2 v-if="!slideContent.alias" v-resize-text="{ratio: slideContent.fontRatio}" class="card_heading">{{ slideContent.first_name }}</h2>
              <h2 v-if="slideContent.alias" v-resize-text="{ratio: slideContent.aliasRatio}" class="card_heading">{{ slideContent.alias }}</h2>
              <p class="card_para">{{ slideContent.bio }}</p>
          </div>
          <div class="card_footer">
            <div class="card_flair">
              <div>&#8226;&#8226;&#8226;</div>
              <div>&#8226;&#8226;&#8226;</div>
            </div>
            <router-link 
              :to=" '/' + this.$route.params.name + '/' + slideContent.full_name"
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
  import json from '../assets/wiki.json'
  
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
            apiLocal: json,

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
        getContent(name) {
            this.content = this.apiLocal.anime[name].characters
        }
    },

    setup() {
      return {
        Virtual,
      };
    },
  };
</script>