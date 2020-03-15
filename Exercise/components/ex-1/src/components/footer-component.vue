<template>
    <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here for {{module}}</p>
                </footer>
            </div>
    </div>
</template>
<script>

export default {
    name: 'footer-component',
    data() {
        return {
            module : 'component-practice'
        }
    }
}

</script>