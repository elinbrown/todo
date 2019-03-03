<template>
  <div id="app">
    <div class="wrapper">
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
        <div class="component-wrapper">
          <add-todo></add-todo>
          <todo-list></todo-list>
        </div>
        <!-- end components --> 

        <!-- footer -->
        <footer>
        <div class="has-text-centered">
          <p>
            <strong>Todo</strong> by Elin Brown.<br>
            <a href="https://github.com/elinbrown/todo" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-icon"/></a>
          </p>
        </div>
        </footer>
      <!-- end footer -->
      </div>
      <!-- end container -->
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
@import url('https://fonts.googleapis.com/css?family=Oswald');

body, html 
{
  font-family: 'Open Sans', sans-serif; 
}

#app 
{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-title
{
  font-family: 'Oswald';
  font-size: 2em; 
}

footer 
{
  background-color: #FFF;
  margin-top: 40px;
}

.wrapper 
{
   margin-top: 40px;
}

.component-wrapper
{
  max-width:60%;
  margin: 0 auto;
}

.fa-icon 
{
  font-size: 2em;
  margin-top: 10px;
}
</style>
