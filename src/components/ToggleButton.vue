<template>
  <div class="togglebutton-wrapper" v-bind:class="isactive ? 'togglebutton-checked' : ''">
      <label v-bind:for="name">
        <span class="togglebutton-label">{{ label }}</span>
        <span class="tooglebutton-box"></span>
      </label>
      <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isactive" v-on:change="abc">
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: ['label', 'name'],
  model: {
    prop: 'checked',
    event: 'change'
  },
  data: function () {
    return {
      isactive: false
    }
  },
  methods: {
    abc: function () {
      this.$emit('clicked', this.isactive)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* TOOGLE COMPONENT */
  .togglebutton-wrapper {
    margin-top:1em;
  }
  .togglebutton-wrapper label {
      display:flex;
      justify-content:flex-end;
      align-items:center;
  }
  .togglebutton-wrapper input {
    position:absolute;
      left:-9999px;
  }
  .togglebutton-wrapper .togglebutton-label {
    font-size:.8rem;
    letter-spacing:.1em
  }
  .togglebutton-wrapper .tooglebutton-box {
    position:relative;
    display:block;
    margin-left:0.6em;
    width:38px;
    height:22px;
    background:white;
    /*border:1px solid black;*/
    border-radius:999px;
    cursor:pointer;
  }
  .togglebutton-wrapper .tooglebutton-box:before {
    content:'';
    position:absolute;
    top:2px; left:2px;
    display:block;
    width:18px; height:18px;
    /*border:1px solid #FF6666;*/
    border-radius:50%;
    background:#FF6666;
    opacity:0.7;
    transition: all .2s ease-in-out;
  }
  .togglebutton-wrapper.togglebutton-focus .tooglebutton-box {
    box-shadow:0px 0px 0px 3px rgba(0,0,0,0.1);
  }
  .togglebutton-wrapper.togglebutton-checked .tooglebutton-box:before {
    left:calc(100% - 4px - 16px);
    /*background:#FF6666;*/
    opacity:1;
  }
</style>