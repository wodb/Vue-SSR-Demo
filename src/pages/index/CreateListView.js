import Top from './top.vue'
import Special_column from "./special_column.vue";

export default (type) => {
    return {
        asyncData({ store, router }) {
            return store.dispatch('FETCH_INDEX_LIST_BY_TYPE', { type })
        },
        render(h) {
            if (type == 'top') {
                return h(Top, { props: { type } })
            }
            return h(Special_column, { props: { type } })
        }
    }
}