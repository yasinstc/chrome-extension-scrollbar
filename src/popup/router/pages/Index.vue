<template>
  <b-container>
    <b-form class="mt-3" @submit.prevent="save()">
      <b-form-group label="Scroll Width:" description="Example: 10">
        <b-form-input type="number" required v-model="scroll.width"></b-form-input>
      </b-form-group>

      <b-form-group label="Scroll Track Color:" description="Example: #900">
        <swatches v-model="scroll.color.track"></swatches>
        <b-form-input type="text" required v-model="scroll.color.track" readonly></b-form-input>
      </b-form-group>

      <b-form-group label="Scroll Thumb Color:" description="Example: #000">
        <swatches v-model="scroll.color.thumb"></swatches>
        <b-form-input type="text" required v-model="scroll.color.thumb" readonly></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-button type="submit" variant="primary" :class="btnClass">Save</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import Swatches from 'vue-swatches';

// Import the styles too, globally
import 'vue-swatches/dist/vue-swatches.min.css';

export default {
  components: {
    Swatches,
  },
  data() {
    return {
      tabID: null,
      btnClass: null,
      scroll: {
        width: 5,
        color: {
          track: '#900',
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
      this.btnClass = 'disabled';
      this.$store.dispatch('save', this.scroll);

      chrome.runtime.sendMessage({ action: 'refreshPage' }, response => {
        this.btnClass = null;
        console.log('Response', response);
      });
    },
  },
};
</script>
