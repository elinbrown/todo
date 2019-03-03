<template>
    <div>
        <form @submit.prevent="addTodo">
            <div class="field">
                <p class="control has-icons-left">
                     <input class="input" type="text" placeholder="Enter a new task" v-model="task">
                    <span class="icon is-small is-left">
                    <font-awesome-icon :icon="['fas', 'plus-square']"/>
                    </span>
                </p>
            </div>
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
