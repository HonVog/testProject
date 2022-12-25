<template src="./template.html"/>
  
<script>
import TestMain from '@/components/TestMain/TestMain.vue';
import { employees } from '@/components/staticData/textData.js'

export default {
  name: 'Test-Controler',
  components: {
    TestMain
  },
  data() {
    return {
      ofises: [
        {
          'id': 0,
          'name': 'Отдел продаж',
          'chec': false
        },
        {
          'id': 1,
          'name': 'Склад',
          'chec': false
        }
      ],
      employ: employees

    }
  },
  mounted() {
  },
  methods: {
    rolClick(index){
      this.ofises[index].chec = !this.ofises[index].chec;
    },

    checkboxOll(isTrue) {
      this.employ.forEach(el => el.checkbox = isTrue);
      this.ofises.forEach( el => el.chec = !true);
    },

    checkboxEl(id) {
      this.employ.forEach(el => {
        if(el.id === id) {
          el.checkbox = !el.checkbox;
        }
      })
    },

    delEl(id){
      this.employ = employees.filter( el => el.id !== id);
    },

    delOfis(nameOfis){
      this.employ = employees.filter( el => el.position !== nameOfis);
      this.ofises = this.ofises.filter( of => of.name !== nameOfis);
    },

    checInput( value ){
      this.employ = employees;
      this.employ = this.employ.filter( 
        el => el.value.toLocaleLowerCase().includes( value.toLocaleLowerCase())
      );
    }
  }
}
</script>











<style scoped lang="scss" src="./style.scss"/>