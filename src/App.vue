<template>
  <div id="app">
    <!-- container -->
    <div class="container">
      <!-- nav -->
      <nav class="level">
        <p class="level-item has-text-centered">
          <span class="app-title">TODO</span>
        </p>
      </nav>
      <!-- end nav -->

      <!-- components --> 
      <add-todo></add-todo>
      <todo-list></todo-list>
      <!-- end components --> 

      <!-- footer -->
      <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Todo</strong> by Elin Brown.<br>
          <a href="https://github.com/elinbrown/todo" target="_blank">Github repo</a>
        </p>
      </div>
    </footer>
    <!-- end footer -->
    </div>
    <!-- end container -->
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
@import url('https://fonts.googleapis.com/css?family=Oswald');

body, html {
  font-family: 'Open Sans', sans-serif; 
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container
{
  margin-top: 20px;
  max-width: 50%;
}

.app-title
{
  font-family: 'Oswald';
  font-size: 2em; 
}

.footer {
  background-color: #FFF;
}

.navbar
{
  background-color: #f1f1f1;
}
</style>
