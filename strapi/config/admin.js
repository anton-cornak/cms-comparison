module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c1f1f0d3159c18755b707241895750e7'),
  },
});
