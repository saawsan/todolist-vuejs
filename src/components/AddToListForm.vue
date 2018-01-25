<template>
  <form name="newform" v-on:submit.prevent="submitForm">
    <label for="newitem">Add to the todo list</label>
    <input type="text" name="newitem" id="newitem" v-model="newitem">
    <button type="submit">Add item</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AddToListForm',
  data: function () {
    return {
      newitem: ''
    }
  },
  methods: {
    submitForm: function () {
      this.addItem(this.newitem)
      this.newitem = ''
    },
    ...mapMutations(['addItem'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* FORM */
  form {
    margin-top:3rem;
    display:flex;
    flex-wrap:wrap;
  }
  form label {
    min-width:100%;
    margin-bottom:.5rem;
    font-size:1.3rem;
  }
  form input {
    flex-grow:1;
    border:none;
    background:#f7f1f1;
    padding:0 1.5em;
    font-size:initial;
  }
  form button {
    padding:0 1.3rem;
    border:none;
    background:#FF6666;
    color:white;
    text-transform:uppercase;
    font-weight:bold;
    border:1px solid rgba(255,255,255,.3);
    margin-left:5px;
    cursor:pointer;
    transition:background .2s ease-out;
  }
  form button:hover {
    background:#FF5E5E;
  }
  form input, 
  form button {
    font-family:'Quicksand', sans-serif;
    height:3rem;
  }
</style>