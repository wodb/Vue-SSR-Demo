<template>
    <div class="top">
        <ul>
            <li v-for="item in topList" :key="item.id">{{item.name}}</li>
        </ul>
        <test />
    </div>
</template>
<script>
    import test from './test.vue'
    export default {
        data() {
            return {}
        },
        asyncData({store,router}) {
            return store.dispatch('getTop')
        },
        computed:{
            topList() {
                return this.$store.state.top
            }
        },
        components:{
            test
        }
    }
</script>