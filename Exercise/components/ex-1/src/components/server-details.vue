<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6" :style="backcol">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        v-for="index in 5" :key="index">
                    Server  {{name}} #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>            
</template>
<script>
export default {
    name: 'server-details-component',
    data() {
        return {
            backcol: {'background-color': 'black'}
        }
    }
}
</script>