<template>
  <div>
    <layout-bar>
      <order-feeds-form />
    </layout-bar>
  </div>
</template>

<script>
import layoutBar from '@/components/dashboard/layoutBar.vue';
import orderFeedsForm from '../forms/orderFeedsForm.vue';

export default {
  components: {
    orderFeedsForm,
    layoutBar,
  },
};
</script>
