# Stage 1: Usar una imagen base de Nginx ligera
FROM nginx:alpine

# Establecer el directorio de trabajo
WORKDIR /usr/share/nginx/html

# Copiar el HTML al contenedor como index.html (se sirve en la raíz)
COPY fuerzasfemeninas.html index.html

# Copiar las imagenes (producto, logo y favicon)
COPY producto.png logo.png favicon.png ./

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
