<template>
    <div>
        <div class="card" v-for="todo in todos" :key="todo.id" @click="toggleTodo(todo.id)">
            <article class="message is-dark">
                <div class="message-body">
                    <div class="columns">
                        <div class="column is-three-quarters" style="text-align: left">
                            {{todo.task}}
                        </div>
                        <div class="column">
                            <span class="tag is-success" v-if="todo.completed">Done</span>
                        </div>
                        <div class="column" style="text-align: right">
                            <button @click="deleteTodo(todo.id)" class="delete"></button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        todos() {
            return this.$store.getters.getNotes;
        }
    },
    methods: {
        toggleTodo: function(id) {
            this.$store.dispatch("toggleTodo", id);
        },
        deleteTodo: function(id) {
            this.$store.dispatch("deleteTodo", id);
        }
    },
}
</script>
<style>
    .card {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>