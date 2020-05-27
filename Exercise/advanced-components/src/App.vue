<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <!-- Using slots to show changing data from parent component 
                 -->
                <!-- <app-blue>
                    <p slot="mainContent"><strong>{{blueContent}}</strong></p>
                    <p slot="subtitle">Subtitle conent of {{blueContent}}</p>
                </app-blue>
                <app-green>
                    <p><strong>{{greenContent}}</strong></p>
                </app-green>
                <app-red>
                    <p><strong>{{redContent}}</strong></p>
                </app-red> -->

                <!-- Using dynamic components -->
                <keep-alive>
                <component :is="selectedComponent"> </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                blueContent: 'The content for blue component',
                redContent: 'The content for red component',
                greenContent: 'The content for green component',
                selectedComponent: 'appRed'
            }
        }
    }
</script>

<style>
</style>
