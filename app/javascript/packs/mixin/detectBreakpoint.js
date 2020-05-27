export default {
  methods: {
    isXs(){
      return this.$vuetify.breakpoint.xs ? true : false
    },
    isSm(){
      return this.$vuetify.breakpoint.sm ? true : false
    },
    isMd(){
      return this.$vuetify.breakpoint.md ? true : false
    },
    isLg(){
      return this.$vuetify.breakpoint.lg ? true : false
    },
    isXl(){
      return this.$vuetify.breakpoint.xl ? true : false
    }
  }
}