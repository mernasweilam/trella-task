
<template>
   <div class="filter">
       <div class="filter__title">Currently looking for shipments that:</div>
       <div class="filter__content">
            <div class="filter__content__action">
                <button class="filter__content__action__btn submit-driver-action" :class="{active: isDriverActive}" @click="submitDriverAction">need a driver</button>
                <button class="filter__content__action__btn submit-nearby-action" :class="{active: isNearbyActive}" @click="submitNearbyAction">nearby</button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name: "FilterShipments",
  data(){
      return{
           isDriverActive: false,
           isNearbyActive: false
      }
  },
  props: {},

  methods: {
      submitDriverAction(){
           this.isNearbyActive = false;
           this.isDriverActive = true;
           this.$emit('needDriverActivated');
      },
      submitNearbyAction(){
          this.isNearbyActive = true;
          this.isDriverActive = false;
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
            @include tablet{
                justify-content: flex-start;
            }
            
            &__btn{
                width: 50%;
                padding: 8px 10px;
                text-transform: capitalize;
                border-radius: 21px;
                font-weight: bold;
                padding: 12px;
                font-size: 14px;
                background: transparent;
                @include tablet{
                    width: 170px;
                    cursor: pointer;
                }
            }
            .submit-driver-action{
                border: 1px solid $primary;
                margin-right: 5px;
                color: $primary;
                @include tablet{
                    margin-right: 20px;
                }
                &.active{
                    background: $primary;
                    color: $white;
                }
            }
             .submit-nearby-action{
               border: 1px solid $secondry;
               @include border-radius(21px);
                color: $secondry;
                &.active{
                    background: $secondry;
                    color: $white;
                }
            }
        }
    }
}
</style>
