<template>
  <div id="app">
    <div class="container">
      <add-todo></add-todo>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');

body, html {
  font-family: 'Open Sans', sans-serif; 
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
}
</style>
