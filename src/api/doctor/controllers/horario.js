// api/tu-modelo/controllers/horario.js

// api/tu-modelo/controllers/horario.js

module.exports = {
    async actualizarHorario(ctx) {
      const { documentId, fecha, hora_inicio, nuevoEstado } = ctx.request.body;
  
      // Encuentra la entidad usando documentId
      const entidad = await strapi.services['doctor'].findOne({ documentId });
  
      if (!entidad) {
        return ctx.throw(404, 'Entidad no encontrada');
      }
  
      // Actualiza el estado del horario
      const disponibilidadActualizada = entidad.disponibilidad.map(item => {
        if (item.fecha === fecha && item.hora_inicio === hora_inicio) {
          return { ...item, estado: nuevoEstado };
        }
        return item;
      });
  
      // Actualiza la entidad en la base de datos
      await strapi.services['doctor'].update({ documentId }, { disponibilidad: disponibilidadActualizada });
  
      ctx.send({ message: 'Horario actualizado', disponibilidad: disponibilidadActualizada });
    },
  };
  