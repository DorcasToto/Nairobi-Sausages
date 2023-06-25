export default {
  incrementCount(state, { breed, count }) {
    const batch = state.batches.find((b) => b.breed === breed);
    if (batch) {
      batch.count += count;
    }
  },
  sellBatches(state, { breed, count }) {
    const batch = state.batches.find((b) => b.breed === breed);
    if (batch) {
      batch.count -= count;
    }
  },
  setOrderedFeeds(state, val) {
    state.orderedFeeds = val;
  },
  setSentBatches(state, val) {
    state.sentBatches = val;
  },
  setSoldBatches(state, val) {
    state.soldBatches = val;
  },
};
