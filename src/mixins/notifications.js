const notificationMixin = {
  data() {
    return {
      notificationVisible: false,
      notificationMessage: '',
      notificationType: '',
    };
  },
  methods: {
    showNotification(message, type) {
      this.notificationVisible = true;
      this.notificationMessage = message;
      this.notificationType = type;

      setTimeout(() => {
        this.hideNotification();
      }, 3000);
    },
    hideNotification() {
      this.notificationVisible = false;
      this.notificationMessage = '';
      this.notificationType = '';
    },

    showSuccessNotification(message) {
      this.showNotification(message, 'success');
    },
    showErrorNotification(message) {
      this.showNotification(message, 'error');
    },
  },
};

export default notificationMixin;
