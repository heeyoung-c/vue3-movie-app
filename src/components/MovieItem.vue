<template>
  <RouterLink 
    :to="`/movie/${movie.imdbID}`"
    :style="{ backgroundImage: `url(${movie.Poster})` }"
    class="movie">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imageLoading: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const poster = this.movie.Poster
      if (poster || poster === 'N/A') {
        this.imageLoading = false
      } else {  
        await this.$loadImage(poster)
        this.imageLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  overflow: hidden;
  position: relative;
  $width: 200px;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
  }
  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 14px;
    background-color: rgba($black, .3);
    font-size: 14px;
    text-align: center;
    backdrop-filter: blur(10px);
    .year {
      color: $primary;
    }
    .title {
      overflow: hidden;
      color: $white;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>