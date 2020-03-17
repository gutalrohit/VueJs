<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details :serverDataBind="serverData"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import {eventBus} from './main';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data() {
            return {
            serverData: {id: 1, status: 'Normal'}
            }
        },
        methods: {
            ShowServerDetails(event) {
                if(event) {
                    this.serverData = event;
                }
            }
        },
        created() {
            //you cant use the mechanism of event bus on the same instance 
            //Like similar to eventbus emit an event from one component anywhere (not a child and parent), and then listen it from anywhere
            //You cant do that, since when you want to watch an event using $on, you refer to an instance
            // when you say 'this' it refers to only the current instance that you have.
            // Hence, you need another instnace to act as a channel to set events on and listen on the smae named instance.
            eventBus.$on('showServerDetailsClick', this.ShowServerDetails);
        }
    }
</script>

<style>

</style>
