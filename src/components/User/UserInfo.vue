<template>
    <div>
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
        <el-row>
            <div v-text="JSON.stringify(data)"></div>
        </el-row>
    </div>
</template>
<script>
    import {vueMethods} from "@aliasAssets/js/utils";

    export default {
        name: "UserList",
        data: () => ({data: null}),
        created() {
            this.data = this.$route.params;
            // console.log(this.$route.params);
        },
        beforeRouteUpdate(to, from, next) {
            // console.log(to);
            // console.log(from);
            // console.log(next);
            next();
            this.data = this.$route.params;
        },
        methods: {
            goBack(e) {
                vueMethods.goBack.call(this);
            },

        }
    }
</script>