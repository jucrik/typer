const messages = {
  es: {
    translations: {
      signup: {
        title: "Registrarse",
        toasts: {
          success: "¡El asesor se creó correctamente! ¡Inicia sesión!",
          fail: "Error al crear el asesor. Verifique los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      Login: {
        title: "Iniciar sesión ahora",
        form: {
          email: "Ingrese correo electrónico",
          password: "Ingrese su contraseña",
        },
        buttons: {
          submit: "Iniciar sesión",
          register: "¿No tienes una cuenta? ¡Regístrate!",
        },
      },
      auth: {
        toasts: {
          success: "¡El inicio de sesión fue exitoso!",
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactName: "Nombre",
          user: "Asesor",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
          ticket_id: "ID",
          queue: "Departamento",
          connection: "Conexión"
        }
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Chats de hoy: ",
          },
        },
        messages: {
          inAttendance: {
            title: "En asistencia"
          },
          waiting: {
            title: "Esperando"
          },
          closed: {
            title: "Resuelto"
          }
        }
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡La conexión de WhatsApp se eliminó correctamente!",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage: "¿Estás seguro? Deberás escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Agregar WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Intentar de nuevo",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content: "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo, o solicite un nuevo Código QR",
          },
          qrcode: {
            title: "Esperando para leer el código QR",
            content: "Haga clic en el botón 'CÓDIGO QR' y escanee el código QR con su teléfono celular para iniciar sesión.",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Se perdió la conexión con el celular",
            content: "Asegúrese de que su móvil esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          id: "ID",
          name: "Nombre",
          number: "Número",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Predeterminado",
          display: "Horario",
          farewellMessage: "Mensaje de despedida"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp se guardó correctamente.",
      },
      qrCode: {
        message: "Lee el QRCode para iniciar sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado con éxito!",
          deletedAll: "¡Todos los contactos se eliminaron con éxito!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Borrar todo",
          importTitle: "Importar contactos",
          deleteMessage: "¿Está seguro de que desea eliminar este contacto? Se perderán todos los chats relacionados.",
          deleteAllMessage: "¿Está seguro de que desea eliminar todos los contactos? Se perderán todos los chats relacionados.",
          importMessage: "¿Quieres importar todos los contactos del teléfono?",
        },
        buttons: {
          import: "Importar contactos",
          add: "Agregar contacto",
          export: "Exportar contactos",
          delete: "Eliminar todos los contactos"
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          actions: "Acciones",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos de contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de WhatsApp",
          email: "Correo electrónico",
          extraName: "Nombre de campo",
          extraValue: "Valor",
        },
        buttons: {
          addExtraInfo: "Añadir información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado con éxito.",
      },
      quickAnswersModal: {
        title: {
          add: "Agregar respuesta rápida",
          edit: "Editar respuesta rápida",
        },
        form: {
          shortcut: "Atajo",
          message: "Respuesta rápida",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Respuesta rápida guardada con éxito.",
      },
      tags: {
        title: "Etiquetas",
        table: {
          name: "Etiquetas",
          color: "Color",
          contacts: "Contactos",
          actions: "Acción"
        },
        toasts: {
          deleted: "¡Etiqueta eliminada con éxito!",
          deletedAll: "¡Todas las etiquetas se eliminaron con éxito!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Borrar todo",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ",
          deleteAllTitle: "Borrar todo",
          deleteMessage: "¿Está seguro de que desea eliminar esta etiqueta?",
          deleteAllMessage: "¿Está seguro de que desea eliminar todas las etiquetas?",
        },
      },
      tagModal: {
        title: {
          add: "Agregar etiqueta",
          edit: "Editar etiqueta",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        form: {
          name: "Nombre de la etiqueta",
          color: "Color de la etiqueta"
        },
        success: "¡Etiqueta guardada con éxito!",
      },
      queueModal: {
        title: {
          add: "Agregar Departamento",
          edit: "Editar Departamento",
        },
        notification: {
          title: "Departamento guardado con éxito!",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de bienvenida",
          startWork: "Inicio",
          endWork: "Fin",
          absenceMessage: "Mensaje de ausencia",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Agregar asesor",
          edit: "Editar asesor",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          profile: "Perfil",
          admin: "Administrador",
          whatsapp: "Conexión estándar",
          user: "Asesor",
          startWork: "Inicio",
          endWork: "Fin",
          isTricked: "Ver contactos",
          enabled: "Habilitado",
          disabled: "Deshabilitado"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "El asesor se guardó con éxito.",
      },
      chat: {
        noTicketMessage: "Seleccione un chat para comenzar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "⬇️ ARRASTRA Y SUELTA LOS ARCHIVOS AQUÍ ⬇️",
          titleFileList: "Lista de archivos"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Departamentos",
      },
      tickets: {
        toasts: {
          deleted: "El chat en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Bandeja de entrada" },
          closed: { title: "Resuelto" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Obtener chats y mensajes",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir chat",
        fieldLabel: "Buscar asesor",
        fieldConnectionLabel: "Transferir a conexión",
        fieldQueueLabel: "Transferir a departamento",
        fieldConnectionPlaceholder: "Seleccione una conexión",
        noOptions: "No se encontró ningún asesor con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Esperando",
        assignedHeader: "Asignado",
        noTicketsTitle: "¡Aquí no hay nada!",
        noTicketsMessage: "No se encontraron chats con este estado o término de búsqueda",
        connectionTitle: "Conexión actualmente en uso.",
        items: {
          queueless: "Sin departamento",
          accept: "Aceptar",
          spy: "Ver",
          close: "Cerrar",
          reopen: "Reabrir",
          return: "Mover a espera",
          connection: "Conexión",
          user: "Asesor",
          queue: "Departamento",
          tags: "Etiquetas"
        },
        buttons: {
          accept: "Responder",
          acceptBeforeBot: "Aceptar",
          start: "empezar",
          cancel: "Cancelar"
        },
        acceptModal: {
          title: "Aceptar chat",
          queue: "Seleccionar departamento"
        },
      },
      newTicketModal: {
        title: "Nuevo chat",
        fieldLabel: "Buscar contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      newTicketModalContactPage: {
        title: "Nuevo chat",
        queue: "Seleccione un departamento",
        fieldLabel: "Buscar contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Estadísticas",
          connections: "Conexiones",
          tickets: "Chats",
          contacts: "Contactos",
          quickAnswers: "Respuestas rápidas",
          etiquetas: "Etiquetas",
          queues: "Departamentos",
          administration: "Administración",
          users: "Asesores",
          settings: "Configuración",
          sendMsg: "Enviando mensajes",
          sendMedia: "Enviando medios",
          api: "Uso de la API",
          apidocs: "Documentación",
          apititle: "API",
          apikey: "Clave API",
          token: "Api"
        },
        appBar: {
          message: {
            hi: "Hola",
            text: "bienvenido a"
          },
          user: {
            profile: "Perfil",
            logout: "Cerrar sesión",
          },
        },
      },
      notifications: {
        noTickets: "Sin notificaciones.",
      },
      queues: {
        title: "Departamentos",
        notifications: {
          queueDeleted: "El departamento ha sido eliminado.",
        },
        table: {
          id: "ID",
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de bienvenida",
          actions: "Acciones",
          startWork: "Inicio",
          endWork: "Fin",
        },
        buttons: {
          add: "Agregar departamento",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir! Los chats de este departamento seguirán existiendo, pero ya no tendrán ningún departamento asignado.",
        },
      },
      queueSelect: {
        inputLabel: "Departamentos",
      },
      quickAnswers: {
        title: "Respuestas rápidas",
        table: {
          shortcut: "Atajo",
          message: "Respuesta rápida",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar respuesta rápida",
          deletedAll: "Eliminar todas las respuestas rápidas",
        },
        toasts: {
          deleted: "Respuesta rápida eliminada con éxito.",
          deletedAll: "Todas las respuestas rápidas eliminadas.",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar esta respuesta rápida: ",
          deletedAll: "¿Está seguro de que desea eliminar todas las respuestas rápidas?",
          deleteMessage: "Esta acción no se puede revertir.",
          deleteAllMessage: "Esta acción no se puede revertir.",
        },
      },
      users: {
        title: "Asesores",
        table: {
          id: "ID",
          name: "Nombre",
          email: "Correo electrónico",
          profile: "Perfil",
          tricked: "Ver contactos",
          whatsapp: "Conexión estándar",
          startWork: "Inicio",
          endWork: "Fin",
          acciones: "Acciones",
        },
        buttons: {
          add: "Agregar asesor",
        },
        toasts: {
          deleted: "Asesor eliminado con éxito.",
          updated: "Asesor actualizado con éxito."
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Se perderán todos los datos del asesor. Los chats abiertos para este asesor se moverán a espera.",
        },
      },
      company:{
        success: "Los datos de la empresa se guardaron con éxito.",
        title: "Datos de la empresa",
        info: "Información",
        name: "Nombre",
        url: "Sitio web"
      },
      integrations: {
        success: "Integración guardada con éxito.",
        title: "Integraciones",
        integrations: {
          openai: {
            title: "OpenAI",
            organization: "Organization ID",
            apikey: "KEY"
          },
          n8n: {
            title: "N8N",
            urlApiN8N: "URL API N8N"
          }
        },
      },
      settings: {
        success: "Configuración guardada con éxito.",
        title: "Configuración",
        settings: {
          userCreation: {
            name: "Habilitar registro de administradores",
            note: "Permitir que cualquier persona se registre desde la página /singup como Administrador",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          allTicket: {
            name: "Ver chats sin departamento",
            note: "Active esta función para que todos los usuarios vean los chats sin departamento",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          CheckMsgIsGroup: {
            name: "Ignorar mensajes de grupos",
            note: "Si lo desactivas, si recibirás mensajes de grupos.",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          call: {
            name: "Aceptar llamadas",
            note: "Si está deshabilitado, el cliente recibirá un mensaje de que no acepta llamadas de voz/video",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          sideMenu: {
            name: "Menú lateral abierto",
            note: "Si está habilitado, el menú lateral comenzará cerrado",
            options: {
              enabled: "Abierto",
              disabled: "Cerrado",
            },
          },
          closeTicketApi: {
            name: "Cerrar chat enviado API",
            note: "Cierra automáticamente el chat cuando se envía a través de API",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          darkMode: {
            name: "Habilitar modo oscuro",
            note: "Cambiar entre el modo claro y el modo oscuro",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          ASC: {
            name: "Orden de entradas",
            note: "Cuando está habilitado, se ordenará de forma ascendente (ASC), al deshabilitarlo se ordenará de forma descendente (DESC)",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          created: {
            name: "Ordenar por fecha o actualización",
            note: "Cuando se activa, las entradas se ordenarán por fecha de creación, al desactivar se ordenarán por fecha de actualización",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          timeCreateNewTicket: {
            name: "Crear nuevo chat después",
            note: "Seleccione el tiempo que tardará en abrir un nuevo chat si el cliente lo contacta nuevamente",
            options: {
              "10": "10 segundos",
              "30": "30 segundos",
              "60": "1 minuto",
              "300": "5 minutos",
              "1800": "30 minutos",
              "3600": "1 hora",
              "7200": "2 horas",
              "21600": "6 horas",
              "43200": "12 horas",
              "86400": "24 horas",
              "604800": "7 días",
              "1296000": "15 días",
              "2592000": "30 días",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado:",
          buttons: {
            return: "Volver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Ingrese un mensaje",
        placeholderClosed: "Reabrir o aceptar este chat para enviar un mensaje.",
        signMessage: "Suscribirse",
      },
      contactDrawer: {
        header: "Datos de contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otros datos del contacto",
      },
      copyToClipboard: {
        copy: "Copiar",
        copied: "Copiado"
      },
      ticketOptionsMenu: {
        delete: "Eliminar",
        transfer: "Transferir",
        confirmationModal: {
          title: "Eliminar el chat ",
          titleFrom: "del contacto ",
          message: "¡Atención! Todos los mensajes relacionados con el chat se perderán.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Aceptar",
          cancel: "Cancelar",
        },
      },
      tablegeoOptionsMenu: {
        delete: "Eliminar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Eliminar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND: "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ​​fue inicializada. Por favor revisa la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de Whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA: "No se pueden descargar medios de WhatsApp. Verifique la página de conexiones",
        ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo",
        ERR_SENDING_WAPP_MSG: "Error al enviar el mensaje de WhatsApp. Verificar página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un chat abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
        ERR_USER_CREATION_DISABLED: "La creación de asesores ha sido deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontraron configuraciones con esta ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con esta ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron chats con esta ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún asesor con esta ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear el chat en la base de datos.",
        ERR_FETCH_WAPP_MSG: "Error al obtener el mensaje en WhatsApp, puede ser demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elige otro.",
        ERR_WAPP_GREETING_REQUIRED: "El mensaje de bienvenida es obligatorio cuando hay más de un departamento.",
        ERR_USER_CREATION_COUNT: "Límite de asesores alcanzados, comuníquese con soporte para solicitar aumento de recursos.",
        ERR_CONNECTION_CREATION_COUNT: "Límite de conexión alcanzado, comuníquese con soporte para solicitar aumento de recursos.",
        ERR_NO_TAG_FOUND: "Etiqueta no encontrada.",
        ERR_OPEN_USER_TICKET: "Ya existe un chat para este contacto con ",
        ERR_NONE_USER_TICKET: "Ya existe un chat para este contacto.",
        ERR_NO_INTEGRATION_FOUND: "Integración no encontrada."
      },
    },
  },
};

export { messages };