<template>
    <div>
        <transition-group name="fade">
        <div class="card card-hover" v-for="todo in todos" :key="todo.id" @click="toggleTodo(todo.id)">
            <article class="message is-dark">
                <div class="message-body">
                    <div class="columns">
                        <div class="column is-four-fifths align-left">
                            {{todo.task}}
                        </div>
                        <div class="column align-right">
                            <transition name="bounce">
                                <span class="tag is-success" v-if="todo.completed">Done</span>
                            </transition>
                        </div>
                        <div class="column align-right">
                            <button @click="deleteTodo(todo.id)" class="delete align-right"></button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        </transition-group>
    </div>
</template>
<script>
require('vue2-animate/dist/vue2-animate.min.css')

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

    .align-left {
        text-align: left; 
    }

    .align-right {
        text-align: right; 
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .card-hover
    {
        cursor: pointer;
    }

</style>