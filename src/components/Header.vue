<template>
  <header id="header">
    <ul>
      <li><router-link :to="{ name : 'TodoList' }">My Todo</router-link></li>
      <li><router-link :to="{ name : 'UserAccount' }">Welcome {{user.fname | capitalize }}</router-link></li>
    </ul>
  </header>
</template>

<script>
// import { filters } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#header {
  margin:0 0 2rem;
  text-align:right;
  ul, li {
    list-style:none;
    display:inline-block;
  }
  li {
    margin-left:.9em;
    font-size:.9rem;
    a {
      color:#af1717;
      transition:all .3s ease-in;
      &:hover {
        text-decoration:none;
      }
      &.router-link-exact-active {
        color:#FF6666;
        text-decoration:none;
      }
    }
  }
}
</style>