<template>
    <b-container>
        <b-form class="mt-3" @submit.prevent="save">
            <b-form-group label="Scroll Width:" description="Example: 10px">
                <b-form-input type="text" required v-model="scroll.width"></b-form-input>
            </b-form-group>

            <b-form-group label="Scroll Track Color:" description="Example: #900">
                <b-form-input type="text" required v-model="scroll.color.track"></b-form-input>
            </b-form-group>

            <b-form-group label="Scroll Thumb Color:" description="Example: #000">
                <b-form-input type="text" required v-model="scroll.color.thumb"></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
            </b-form-group>
        </b-form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            tabID: null,
            scroll: {
                width: '12px',
                color: {
                    track: '#000',
                    thumb: '#000',
                },
            },
        };
    },

    mounted() {
        this.scroll = this.$store.getters.scroll;
    },

    methods: {
        save() {
            this.$store.dispatch('save', this.scroll);

            chrome.runtime.sendMessage({ action: 'refreshPage' }, response => {
                console.log('Response', response);
            });
        },
    },
};
</script>
