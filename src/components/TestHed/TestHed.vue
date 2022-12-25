<template src="./template.html"/>

<script>

export default {
  name: 'Test-Hed',
  components: {
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    checInput(){
      this.$emit('checInput', this.inputValue);
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss"/>