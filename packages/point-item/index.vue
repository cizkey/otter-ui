<template>
  <div>
    <div class="otter-point-item">
      <div class="strong point">•</div>
      <div class="strong"><slot/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtterPointItem'
}
</script>

<style lang="stylus" scoped>
.otter-point-item
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .point
    margin-left: 12px;
    margin-right: 10px;

  .strong
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #3072f6;
    letter-spacing: 0;
    line-height: 25px;
</style>
