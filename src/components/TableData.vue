<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { sortBy } from '@/utils/sortBy';
    import { Watch } from 'vue-property-decorator';

    @Component({})
    export default class TableData extends Vue {
        @Prop({ required: true }) private url!: string;
        @Prop() private sort!: string;

        private data: any | null = null;

        @Watch('sort')
        private sortData() {
            console.log(this.sort);
        }

        private created() {
            fetch(this.url)
                .then((response) => response.json())
                .then((response) => {
                    if (this.sort) {
                        this.data = sortBy(response, this.sort);
                    } else {
                        this.data = response;
                    }
                });
        }

        private render() {
            if (this.$scopedSlots.default) {
                return this.$scopedSlots.default({
                    data: this.data,
                });
            }
        }
    }
</script>