<template>
    <div class="tab-bar-item" @click="itemClick">
      <slot name="item-icon"></slot>
      <div v-bind:style="activeStyle"><slot name="item-text"></slot></div>

      </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
          path:String,
          activeColor:{
            type:String,
            default:'red'
        }
      },

        computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !== -1
          },
          activeStyle(){
            return this.isActive? {color:this.activeColor}:{}
          }

        },
        methods:{
          itemClick(){
            this.$router.replace(this.path).catch(err=>err)
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1px;
    text-align: center;
  }
  .tab-bar-item img{
    width: 35px;
    height: 35px;
  }
</style>
