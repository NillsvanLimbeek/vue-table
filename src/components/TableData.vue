<script lang="ts">
    import { Vue, Component, Prop, Watch } from '@/vue-script';

    import { sortSingle } from '@/utils';

    @Component({})
    export default class TableData extends Vue {
        @Prop({ required: true }) private url!: string;
        @Prop() private sort!: string;

        private data: any | null = null;

        @Watch('sort')
        private sortData(): void {
            this.sort[0] === '-'
                ? this.data.reverse()
                : (this.data = sortSingle(this.data, this.sort));
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