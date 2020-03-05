<template>
    <article class="quote quote-grid">
        <div class="m-2 quote quote-tile" v-for="(quote, index) in allQuotes" :key="index">{{quote}}</div>
    </article>
</template>

<script>
export default {
    name: "quote-show",
    props: ['allQuotes']
}
</script>
<style scoped>

</style>