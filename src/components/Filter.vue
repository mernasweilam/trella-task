
<template>
   <div class="filter">
       <div class="filter__title">Currently looking for shipments that:</div>
       <div class="filter__content">
            <div class="filter__content__action">
                <button class="filter__content__action__btn" @click="submitDriverAction">need a driver</button>
                <button class="filter__content__action__btn" @click="submitNearbyAction">nearby</button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name: "FilterShipments",
  data(){
      return{
           
      }
  },
  props: {},

  methods: {
      submitDriverAction(){
           this.$emit('needDriverActivated');
      },
      submitNearbyAction(){
           this.$emit('needNearbyDriverActivated');
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/style.scss";
.filter{
    @include display-flex;
    @include flex-prop('', flex-start, column);
    &__title{
        font-size: 18px;
        font-weight: 700;
    }
    &__content{
        @include display-flex;
        @include flex-prop('center', flex-start, column);
        margin: 20px 0;
        width: 100%;
        &__action{
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            &__btn{
                width: 50%;
                padding: 8px 10px;
                text-transform: capitalize;
                background: #161e3c;
                border: #161e3c;
                border-radius: 21px;
                color: #fff;
                font-weight: bold;
                padding: 12px;
                font-size: 14px;
                &:first-of-type{
                    background: #F16523;
                    border: #F16523;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
