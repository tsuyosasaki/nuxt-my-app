<template lang="pug">
  div
    p
    | User ID: {{userId}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class UserId extends Vue {
  public get userId() {
    return this.$route.params.id
  }
}
</script>

<style lang="sass" scoped>

</style>
