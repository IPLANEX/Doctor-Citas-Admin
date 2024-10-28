



module.exports = {

    routes: [
      {
        method: 'PATCH',
        path: '/appointments/:documentId/rating',
        handler: 'custom-controller.updateRating',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };

  




