# ----- Etapa 1: Construcción (Build Stage) -----
# (Toda la etapa 1 sigue igual...)
FROM node:20-alpine AS build
ARG VITE_API_URL
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
# (Asegúrate de haber corrido npm install react-router-dom)
COPY . .
RUN echo "VITE_API_URL=${VITE_API_URL}" > .env.production
RUN npm run build

# ----- Etapa 2: Servicio (Serve Stage) -----
FROM nginx:1.27-alpine AS final

# --- ¡CAMBIO CLAVE AQUÍ! ---
# Copia los archivos de /app/dist DENTRO de /agricolas-vinas
COPY --from=build /app/dist /usr/share/nginx/html/agricolas-vinas

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]