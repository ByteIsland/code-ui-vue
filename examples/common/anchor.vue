<template>
	<div class="anchor">
		<h1 v-if="h1" :id="TLink">{{ title }}</h1>
		<h2 v-if="h2" :id="TLink">{{ title }}</h2>
		<h3 v-if="h3" :id="TLink">{{ title }}</h3>
		<h4 v-if="h4" :id="TLink">{{ title }}</h4>
		<h5 v-if="h5" :id="TLink">{{ title }}</h5>
		<slot></slot>
	</div>	
</template>

<script>
export default {
  props: {
    h1: Boolean,
    h2: Boolean,
    h3: Boolean,
    h4: Boolean,
    h5: Boolean,
    title: String,
    id: String
  },
  computed: {
    TLink() {
      return this.id;
    }
  }
};
</script>

<style lang="sass">

</style>
