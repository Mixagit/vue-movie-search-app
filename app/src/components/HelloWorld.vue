<script>
export default {
    data() {
        return {
            tests: this.$store.state.test.tests,
        };
    },
};
</script>

<template>
    <div class="container">
        <div class="tests" v-for="test in tests" :key="test.id">
            {{ test.desc }}
        </div>
    </div>
</template>

<style scoped lang="sass">
.container
  margin: 100px
  border: 1px solid #fff
  color: white
  text-align: center
</style>
