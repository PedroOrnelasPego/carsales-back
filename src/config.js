module.exports = {
  privateKey: '2f639018-7c65-44df-a3a2-a070bd2a10a8',
  // connectionUrlDatabase: 'mongodb://127.0.0.1:27017/car-sales',
  connectionUrlDatabase:
    'mongodb+srv://pedrohenrique:pedro@carsalesdb.f0skzr2.mongodb.net/?retryWrites=true&w=majority',
  apiPort: 8080,
  corsOptions: {
    origin: ['http://127.0.0.1:4200', 'mongodb://localhost/'],
  },
};
