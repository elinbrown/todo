<template>
    <div>
        <div class="card" v-for="todo in todos" :key="todo.id" @click="toggleTodo(todo.id)">
            <article class="message is-dark">
                <div class="message-body">
                   {{todo.task}}
                   <span class="tag is-success" v-if="todo.completed">Done</span>
                   <button @click="deleteTodo(todo.id)" class="delete"></button>
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
