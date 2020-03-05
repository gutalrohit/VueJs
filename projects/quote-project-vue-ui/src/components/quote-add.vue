<template>
    <form>
        <fieldset>
            <section class="quote quote-add">
                <label>Insert the quote here</label>
                <textarea class="w-75 h-50" v-model="enteredQuote"></textarea>
                <button type="button" :disabled="allQuotes.length > 9" class="btn btn-primary" @click="addQuotes">Add</button>
            </section>
        </fieldset>
    </form>
</template>

<script>
export default  {
    name: 'quote-add',
    props: ['allQuotes'],
    data: function() {
        return {
            enteredQuote: ''
        }
    },
    methods: {
        addQuotes() {
            this.$emit('quoteAddButtonClick', this.enteredQuote);
            this.enteredQuote = '';
        }
    }
}
</script>

<style scoped>

</style>