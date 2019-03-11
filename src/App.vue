<template>
  <div id="app">
    <app-test-component></app-test-component>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import TestComponent from '@/components/TestComponent'
export default {
  name: 'app',
  components: {
    'app-test-component': TestComponent
  }
}
</script>

<style>
</style>
