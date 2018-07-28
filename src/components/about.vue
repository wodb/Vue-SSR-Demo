<template>
    <div class="about">
        <ul>
            <li v-for="item in aboutList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        asyncData({store,router}) {
            return store.dispatch('getAbout')
        },
        computed:{
            aboutList() {
                return this.$store.state.aboutList
            }
        }
    }
</script>