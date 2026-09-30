FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM node:22-alpine
WORKDIR /app

LABEL org.opencontainers.image.authors="hello@jbstepan.com"
LABEL com.jbstepan.vendor="JB Stepan"
LABEL version="1.0.0"
LABEL description="Yet Another (Headless) Content Management System™"

ENV BEHIND_PROXY=false
ENV TIMEZONE="Etc/UTC"
ENV MONGODB_URI=""
ENV BETTER_AUTH_SECRET=""
ENV BETTER_AUTH_URL=""

COPY --from=build /app/apps/server/dist ./dist 
COPY --from=build /app/apps/admin/build ./admin

# Do not change
ENV NODE_ENV=production ADMIN_DIR=./admin

EXPOSE 80
CMD ["node", "dist/index.mjs"]