<template>
  <div class="text-md-center">
    <v-avatar
      color="grey lighten-4"
      size="150"
    >
      <img
        :src="publicPath('/img/avatar.jpg')"
        alt="안재성"
      >
    </v-avatar>
  </div>
</template>

<script>
export default { name: 'Avatar' }
</script>

<style scoped>

</style>
