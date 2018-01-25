<template>
  <main id="todolist">
    <h1>
      Todo List
      <span>Get things done, one item at a time.</span>
    </h1>
    <template v-if="todo.length">
      <transition-group name="todolist" tag="ul">
        <li v-for="item in todoByStatus" v-bind:class="item.done ? 'done' : ''" v-bind:key="item.id">
          <span class="label">{{item.label}}</span>
          <div class="actions">
            <button class="btn-picto" type="button" v-on:click="markAsDoneOrUndone(item)" v-bind:aria-label="item.done ? 'Undone' : 'Done'" v-bind:title="item.done ? 'Undone' : 'Done'">
              <i aria-hidden="true" class="material-icons">{{ item.done ? 'check_box' : 'check_box_outline_blank' }}</i>
            </button>
            <button class="btn-picto" type="button" v-on:click="deleteItemFromList(item)" aria-label="Delete" title="Delete">
              <i aria-hidden="true" class="material-icons">delete</i>
            </button>
          </div>
        </li>
      </transition-group>
      <ToggleButton 
        label="Move done items at the end?"
        name="todosort"
        v-on:clicked="clickontoogle" />
    </template>
    <p v-else class="emptylist">Your todo list is empty.</p>

    <AddToListForm />
  </main>
</template>

<script>
import ToggleButton from './ToggleButton.vue'
import AddToListForm from './AddToListForm.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  data () {
    return {
      sortByStatus: false
    }
  },
  components: { ToggleButton: ToggleButton, AddToListForm: AddToListForm },
  methods: {
    markAsDoneOrUndone: function (item) {
      item.done = !item.done
    },
    deleteItemFromList: function (item) {
      let index = this.todo.indexOf(item)
      this.todo.splice(index, 1)
    },
    clickontoogle: function (active) {
      this.sortByStatus = active
    }
  },
  computed: {
    todoByStatus: function () {
      if (!this.sortByStatus) {
        return this.todo
      }
      return this.todoSortedByDoneStatus
    },
    ...mapState(['todo']),
    ...mapGetters(['todoSortedByDoneStatus'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>