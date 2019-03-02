<template>
    <div>
        <form @submit.prevent="addTodo">
            <input class="input" type="text" placeholder="Enter a new task" v-model="task">
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        task: "",
        newId: 1
    }),
    methods: {
        addTodo: function() {
            this.$store.dispatch("addTodo", this);
            this.newId ++;
            this.task = "";
        }
    },
}
</script>
