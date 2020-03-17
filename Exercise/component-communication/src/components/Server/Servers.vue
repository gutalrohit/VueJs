<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-description
            v-for="serversDetail in serversDetails"
            :key="serversDetail.id" 
            :serverData="serversDetail">
            </server-description>
        </ul>
    </div>
</template>

<script>
import serverDescription from './ServerDescription.vue';

export default {
    data() {
        return {
            serversDetails: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Success'},
                {id: 3, status: 'Critical'},
                {id: 4, status: 'Normal'}
            ]
        }
    },
    components: {
        serverDescription
    },
    methods: {
        showServerDetails(serversDetail) {
            console.log(serversDetail);
            //this.$emit('clickedOnServerDetails', serversDetail);
        }
    }
}
 
</script>

<style>

</style>
