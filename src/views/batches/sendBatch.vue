<template>
    <div>
      <layout-bar>
        <send-batch-form />
      </layout-bar>
    </div>
  </template>
<script>
import layoutBar from '@/components/dashboard/layoutBar.vue';
import sendBatchForm from '../forms/sendBatchForm.vue';

export default {
  components: {
    sendBatchForm,
    layoutBar,
  },
};
</script>
