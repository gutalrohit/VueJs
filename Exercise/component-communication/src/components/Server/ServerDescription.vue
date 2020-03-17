<template>
    <li class="list-group-item"
        @click="sendData(serversDetail)">
        Server #{{ serverData.id }}
    </li>
</template>
<script>
import {eventBus} from '../../main';
export default {
    props: ['serverData'],
    methods: {
        sendData(serversDetail) {
            eventBus.$emit('showServerDetailsClick', this.serverData);
        }
    }
}
</script>