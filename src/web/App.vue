<template>
    <div id="app">
        <EngineeringFramework/>
        12
    </div>
</template>
<script>
    import EngineeringFramework from './components/EngineeringFramework.vue';

    console.log('dev-01')
    export default {
        name: 'app',
        data: () => ({}),
        components: {
            EngineeringFramework,
        },
        methods: {}
    }
</script>

<style>
    @import "~@aliasAssets/style/common.css";

    body, html {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*color: #2c3e50;*/
    }
</style>