


import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::appointment.appointment');

module.exports = {
    async updateRating(ctx) {
      const { documentId } = ctx.params;
      const { Rating } = ctx.request.body;
  
      // Validar que Rating se ha proporcionado
      if (typeof Rating === 'undefined') {
        return ctx.badRequest('Rating field is required.');
      }
  
      // Buscar la cita
      const appointment = await strapi.service('api::appointments.appointment').findOne({ documentId });
  
      // Validar que la cita existe
      if (!appointment) {
        return ctx.notFound('Appointment not found.');
      }
  
      // Actualizar solo el campo Rating
      const updatedAppointment = await strapi.service('api::appointments.appointment').update(
        { documentId },
        { data: { Rating } }
      );
  
      return ctx.send(updatedAppointment);
    },
  };
   