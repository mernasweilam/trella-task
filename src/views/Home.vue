<template>
  <div class="home">
    <AppBar />
    <div class="content">
      <FilterShipments
        @needDriverActivated="fetchShipments"
        @needNearbyDriverActivated="fetchNearbyShipments"
      />
      <CardData v-for="card in cards" :key="card.key" :card="card" />
    </div>
  </div>
</template>
<style lang="scss">
@import "../styles/style.scss";
.content {
  padding: 20px;
  @include tablet{
    padding: 50px 106px;
  }
}
</style>
<script>
import AppBar from "@/components/AppBar.vue";
import FilterShipments from "@/components/Filter";
import CardData from "@/components/CardData";
import trellaAxios from "../core/trellaAxios";
export default {
  name: "HomePage",
  components: {
    AppBar,
    FilterShipments,
    CardData
  },

  data() {
    return {
      cards: []
    };
  },

  methods: {
    //fetch shipments that need a driver
    fetchShipments() {
      trellaAxios.get(`https://case-api.trella.app/marketplace?outcode='driver'`)
        .then(data => {
          this.cards = data.data;
        });
    },
    //fetch nearby shipments
    fetchNearbyShipments() {
      trellaAxios
        .get(`https://case-api.trella.app/marketplace?lng=30&lat=30`)
        .then(data => {
          this.cards = data.data;
        });
    }
  },
  mounted() {}
};
</script>
