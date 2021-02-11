<template>
    <div class="card">
       <div class="card__shipment">
           <span class="vehicle-type"><span class="card__shipment__title">Type:</span> {{card.vehicleType}}</span>
           <span class="price">{{card.price}} LE</span>
       </div>
       <div class="bids-no"><span class="card__shipment__title">Number Of Bids: </span>{{card.numberOfBids}}</div>
       <div class="commodity"><span class="card__shipment__title">Commodity:</span> {{card.commodity}}</div>
       <div class="address"><span class="card__shipment__title">addresses:</span>
       <ul>
           <li>{{card.addresses[0].name}}</li>
            <li>{{card.addresses[1].name}}</li>
       </ul>
       </div>
    </div>
    
   
</template>
<script>
export default {
  name: "CardData",
  data(){
    return{
    }
  },
  props: {
    card: Object,
  },
  methods: {}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/style.scss";
.card{
    @include display-flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;
    align-items: self-start;
    margin-bottom: 20px;
    &__shipment{
        display: flex;
        justify-content: space-between;
        width: 100%;
        &__title{
            font-weight: bold;
            color: #161e3c;
        }
        .price{
          font-weight: bold;
          color: #F16523;
          font-size: 20px;
        }
    }
    .address{
         @include display-flex;
         ul{
            margin: 0;
            padding-left: 25px;
            @include display-flex;
            flex-direction: column;
            align-items: self-end;
         }
    }
}
</style>
