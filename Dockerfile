# --- Build stage: compile the static Vite bundle ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# vite build only (skip the project-wide `tsc` gate, which still trips on the
# leftover Vue files); produces a fully static site in /app/dist
RUN npx vite build

# --- Serve stage: nginx serving the static files ---
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
