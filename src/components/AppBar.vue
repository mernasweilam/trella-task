<template>
    <header class="header">
        <div class="header__data">
            <div class="header__data__logo">
                <img src="../assets/TrellaLogo.png">
            </div>
        </div>
    </header>
</template>

<script>
export default {

  name: "AppBar",
  data(){
      return{}
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    &__data{
        &__logo{
            img{
                width: 100px;
            }
        }
    }
}

</style>
