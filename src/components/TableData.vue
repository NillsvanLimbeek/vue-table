<script lang="ts">
    import { Vue, Component, Prop, Watch } from '@/vue-script';

    import { sortSingle, sortMultiple } from '@/utils';

    import { SortBy } from '@/data';

    @Component({})
    export default class TableData extends Vue {
        @Prop({ required: true }) private url!: string;
        @Prop() private sort!: SortBy[];

        private data: any | null = null;

        @Watch('sort')
        private sortData(): void {
            if (this.sort.length > 1) {
                this.data = sortMultiple(this.data, this.sort);
            } else {
                if (this.sort[0].direction === 1) {
                    this.data = sortSingle(this.data, this.sort[0].title);
                } else if (this.sort[0].direction === -1) {
                    this.data = sortSingle(this.data, this.sort[0].title).reverse();
                }
            }
        }

        private created(): void {
            fetch(this.url)
                .then((response) => response.json())
                .then((response) => (this.data = response));
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