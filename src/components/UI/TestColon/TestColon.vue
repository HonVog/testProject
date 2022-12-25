<template src="./template.html"/>

<script>


export default {
  name: 'test-colon',
  props:[
    'baseColon'
  ],

  data() {
    return {
      baceChecbox: this.baseColon.checkbox
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss" src="./style.scss"/>
