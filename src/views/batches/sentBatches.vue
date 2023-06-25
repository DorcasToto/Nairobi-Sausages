<template>
  <layout-bar>
    <table class="custom-table">
      <thead>
      <tr>
        <th>Breed</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Large white</td>
        <td>6 months</td>
        <td>150 kg</td>
        <td>test</td>
      </tr>
      <tr>
        <td>Large black</td>
        <td>4 months</td>
        <td>120 kg</td>
        <td>test</td>
      </tr>
      <!-- Add more rows as needed -->
      </tbody>
    </table>
  </layout-bar>
</template>
<script>
import layoutBar from '@/components/dashboard/layoutBar.vue';

export default {
  components: {
    layoutBar,
  },
};
</script>
