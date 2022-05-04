<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI.COM</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  color: $black;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>