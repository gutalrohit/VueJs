<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details {{serverDataBind.id}} - {{ serverDataBind.status }}</p>
    </div>

</template>

<script>
export default {
    props: ['serverDataBind']
}
</script>

<style>

</style>
