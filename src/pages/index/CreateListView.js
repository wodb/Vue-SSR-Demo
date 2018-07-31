import List from './list.vue'

export default (type) => {
    return {
        asyncData({ store, router }) {
            return store.dispatch('FETCH_INDEX__LIST_BY_TYPE', { type })
        },
        render(h) {
            return h(List, { props: { type } })
        }
    }
}