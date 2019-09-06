<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class TableData extends Vue {
        @Prop({ required: true }) private url!: string;

        private data: any | null = null;

        private created() {
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