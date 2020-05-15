<template>
   <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tabbar{
  display: flex;
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background-color:#bbbbbb;
}

</style>
