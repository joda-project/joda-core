export default function() {
  this.namespace = '/api';

  this.get('/about', () => {
    return {
      data: {
        version: '1.0',
        features: []
      }
    };
  });
}
