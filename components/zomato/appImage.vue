<template>
  <img
    :data-src="lazySrc"
    :data-srcset="lazySrcset"
    :style="style"
  >
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#efefef',
    },
    height: {
      type: Number,
      default: null,
    },
    lazySrc: {
      type: String,
      default: null,
    },
    lazySrcset: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    aspectRatio() {
      // Calculate the aspect ratio of the image
      // if the width and the height are given.
      if (!this.width || !this.height) return null;

      return (this.height / this.width) * 100;
    },
    style() {
      // The background color is used as a
      // placeholder while loading the image.
      // You can use the dominant color of the
      // image to improve perceived performance.
      // See: https://manu.ninja/dominant-colors-for-lazy-loading-images/
      const style = { backgroundColor: this.backgroundColor };

      if (this.width) style.width = `${this.width}px`;

      // If the image is still loading and an
      // aspect ratio could be calculated, we
      // apply the calculated aspect ratio by
      // using padding top.
      const applyAspectRatio = this.loading && this.aspectRatio;
      if (applyAspectRatio) {
        // Prevent flash of unstyled image
        // after the image is loaded.
        style.height = 0;
        // Scale the image container according
        // to the aspect ratio.
        style.paddingTop = `${this.aspectRatio}%`;
      }

      return style;
    },
  },
  mounted() {
    this.doLoadImage()
  },
  methods: {
    doLoadImage(){
      /*const setLoadingState = () => {
        this.loading = false;
      };
      this.$el.addEventListener('load', setLoadingState);
      this.$once('hook:destroyed', () => {
        this.$el.removeEventListener('load', setLoadingState);
      });*/

      if ("IntersectionObserver" in window) {
        let onIntersection = (changes) => {
          for (const change of changes) {
            if (typeof change.isVisible === 'undefined') {
              // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
              change.isVisible = true;
            }
            if ((this.$el.getBoundingClientRect().top <= window.innerHeight && this.$el.getBoundingClientRect().bottom >= 0) && getComputedStyle(this.$el).display !== "none" && (change.isVisible || change.isVisible == false)) {
              let lazyImage = change.target
              lazyImage.src = lazyImage.dataset.src
              lazyImage.srcset = lazyImage.dataset.srcset
              observer.unobserve(lazyImage)
            }
            if(typeof change.isIntersecting === 'undefined'){
              let lazyImage = change.target
              lazyImage.src = lazyImage.dataset.src
              lazyImage.srcset = lazyImage.dataset.srcset
            }
          }
        };
        let observer = new IntersectionObserver(onIntersection, {
          trackVisibility : false,
          delay : 100
        });
        observer.observe(this.$el);
      }else{
        this.$el.src = this.$el.dataset.src
        this.$el.srcset = this.$el.dataset.srcset
      }
    }
  },
  watch:{
    lazySrcset(){
      if ("IntersectionObserver" in window) {
        this.$el.src = ''
        this.$el.srcset = ''
        let onIntersection = (changes) => {
          for (const change of changes) {
            if (typeof change.isVisible === 'undefined') {
              // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
              change.isVisible = true;
            }
            if ((this.$el.getBoundingClientRect().top <= window.innerHeight && this.$el.getBoundingClientRect().bottom >= 0) && getComputedStyle(this.$el).display !== "none" && (change.isVisible || change.isVisible == false)) {
              let lazyImage = change.target
              lazyImage.src = lazyImage.dataset.src
              lazyImage.srcset = lazyImage.dataset.srcset
              observer.unobserve(lazyImage)
            }
            if(typeof change.isIntersecting === 'undefined'){
              let lazyImage = change.target
              lazyImage.src = lazyImage.dataset.src
              lazyImage.srcset = lazyImage.dataset.srcset
            }
          }
        };
        let observer = new IntersectionObserver(onIntersection, {
          trackVisibility : false,
          delay : 100
        });
        observer.observe(this.$el);
      }else{
        this.$el.src = this.$el.dataset.src
        this.$el.srcset = this.$el.dataset.srcset
      }
    }
  }
};
</script>