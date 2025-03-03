module.exports = {
    plugins: [
      require('tailwind-scrollbar-hide'), // Añade el plugin aquí
    ],
    theme: {
      extend: {
        // Añade estilos personalizados para ocultar la barra de desplazamiento
        scrollbar: {
          none: {
            /* Chrome, Safari y Opera */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            /* Firefox */
            scrollbarWidth: 'none',
            /* Internet Explorer y Edge */
            '-ms-overflow-style': 'none',
          },
        },
      },
    },
  };