FROM node:22-slim AS build

WORKDIR /app

# Baked into the build: server-side rewrites (BACKEND_URL) and browser-side API base (NEXT_PUBLIC_API_URL).
ARG BACKEND_URL=http://127.0.0.1:8000
ARG NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
ENV BACKEND_URL=$BACKEND_URL \
    NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-slim AS runtime

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "start"]
