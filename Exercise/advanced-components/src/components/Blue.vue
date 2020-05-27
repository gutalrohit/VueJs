<template>
    <div>
        <!-- //slots will match the name, and non-named slot will dispaly content from
         parent component that does not have slot attribute -->
        <slot name="mainContent"></slot>
        <slot ></slot>
        <p>Contnet from the child component</p>
        <slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>