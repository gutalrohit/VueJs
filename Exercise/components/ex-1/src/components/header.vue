<template>
    <div class="row">
            <div class="col-xs-12" :class="headerClass">
                <header>
                    <h1>Server Status new</h1>
                </header>
            </div>
        </div>
</template>

<script>
export default {
    data: function() {
        return {
            headerClass: 'header-blue'
        }
    }
}
</script>

<style scoped>
    .header-blue {
        background-color: blue;
    }
</style>