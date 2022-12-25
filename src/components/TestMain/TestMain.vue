<template src="./template.html"/>

<script>
import TestHed from '@/components/TestHed/TestHed.vue';
import TestBody from '@/components/TestBody/TestBody.vue'

export default {
  name: 'Test-Main',
  components: {
    TestHed,
    TestBody
  },
  props:[
    'ofises',
    'employ'
  ],
  data() {
    return {
    }
  },
  methods: {
    rolClick( index ) {
      this.$emit('rolClick', index);
    },

    checkboxOll(isTrue){
      this.$emit('checkboxOll', isTrue)
    },

    checkboxEl(id) {
      this.$emit('checkboxEl', id);
    },

    delEl(id) {
      this.$emit('delEl', id);
    },

    delOfis( nameOfis){
      this.$emit('delOfis', nameOfis);
    },

    checInput(value){
      this.$emit('checInput', value);
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss"/>