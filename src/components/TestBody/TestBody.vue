<template src="./template.html"/>

<script>
import { base_colon } from '@/components/staticData/textData'

export default {
  name: 'Test-Body',
  components: {
  },
  props:[
    "ofises",
    "employ"
  ],
  data() {
    return {
      baseColon: base_colon[0],
      id: ''
    }
  },
  computed:{
    getEmploeValue() {
      return this.employ.length;
    },
  },
  methods: {
    getEmploeOfis(ofis){
      return this.employ.filter(element => element.position === ofis).length;
    },

    checkboxOll(isTrue){
      this.$emit('checkboxOll', isTrue)
    },

    checkboxEl(id){ 
      this.$emit('checkboxEl', id)
    },
    
  }
}
</script>

<style scoped lang="scss" src="./style.scss"/>