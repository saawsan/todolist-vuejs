<template>
  <main id="todolist">
    <h1>
      My account
      <span>Your personal data are safe with us.</span>
    </h1>
    
    <form class="personaldata" name="personaldata" v-on:submit.prevent="submitForm">
      <div class="field ftext">
        <label for="fname">Name</label>
        <input type="text" name="fname" id="fname" v-model="newUser.fname">
      </div>
      <div class="field ftext">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="newUser.email">
      </div>
      <div class="field ftext">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="newUser.password">
      </div>
      <div class="field fcheck">
        <input type="checkbox" name="notif" id="notif" v-model="newUser.notif">
        <label for="notif">Receive notification by email</label>
      </div>
      <button type="submit">Modify</button>
    </form>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'UserAccount',
  data: function () {
    const newUser = Object.assign({}, this.$store.state.user)
    return { newUser }
  },
  methods: {
    submitForm: function () {
      this.updateUser(this.newUser)
    },
    ...mapMutations(['updateUser'])
  }
}
</script>

<style lang="scss">
.personaldata {
  margin-top:1.6rem;
  overflow: hidden;
  input, button {
    font-family:'Quicksand', sans-serif;
  }

  .field {
    margin-bottom:1.2rem;
  }
  .ftext {
    label {
      display:block;
      margin-bottom:.5rem;
    }
    input {
      display:block;
      height:2.3rem;
      font-size:.8rem;
      padding:0 .5rem;
      width:100%;
    }
  }
  button {
    float:right;
    padding:0 1.3rem;
    border:none;
    color:white;
    background:#FF5E5E;
    text-transform:uppercase;
    font-weight:bold;
    border:1px solid rgba(255,255,255,.3);
    margin-left:5px;
    cursor:pointer;
    transition:background .2s ease-out;
    height:3rem;
    &:hover {
      background:#FF6666;
    }
  }
}
</style>