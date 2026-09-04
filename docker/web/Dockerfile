FROM node:22-alpine AS build

WORKDIR /app

COPY web/package*.json ./

RUN npm ci

COPY web .
RUN npm run build

FROM nginx:1.25-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html

COPY docker/web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
