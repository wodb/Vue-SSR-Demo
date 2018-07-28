<template>
    <div class="index">
        <!--这是index-->
        <ul>
            <li v-for="item in fooCount" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        asyncData({store,router}) {
            return store.dispatch('getList')
        },
        computed:{
            fooCount() {
                return this.$store.state.indexList
            }
        }
    }
</script>