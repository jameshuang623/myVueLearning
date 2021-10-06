<template>
  <div>
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script lang="js">
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  components:{Count, Person},
}
</script>

<style scoped lang="scss">

</style>
