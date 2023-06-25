<template>
  <layout-bar>
    <table class="custom-table">
      <thead>
      <tr>
        <th>Feed Type</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Quantity</th>
        <th>Delivery Address</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Premium Feed</td>
        <td>6 months</td>
        <td>150 kg</td>
        <td>10 kg</td>
        <td>123 Main St, Nairobi</td>
      </tr>
      <tr>
        <td>Standard Feed</td>
        <td>4 months</td>
        <td>120 kg</td>
        <td>15 kg</td>
        <td>456 Park Ave, Mombasa</td>
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
