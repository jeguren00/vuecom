<template>
    <p>Redirigiendo a auth0....</p>
</template>

<script>
export default {
  created() {
    this.$auth0.logout({
      returnTo: window.location.origin
    });
  }
};
</script>