<template>
  <div>
    <layout-bar>
      <sell-batch-form />
    </layout-bar>
  </div>
</template>
<script>
import layoutBar from '@/components/dashboard/layoutBar.vue';
import sellBatchForm from '../forms/sellBatchForm.vue';

export default {
  components: {
    sellBatchForm,
    layoutBar,
  },
};
</script>
