ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

# ENV NODE_ENV=production

WORKDIR /src

FROM base as build

# COPY --link package.json package-lock.json .
# COPY yarn.lock package.json ./
COPY package.json ./
# RUN yarn add nuxt -g
# RUN cat package.json
# RUN pwd && ls -l
# RUN rm -rf node_modules

# RUN apk add --no-cache yarn

# RUN npm install
RUN yarn install

COPY . .

# RUN yarn build
RUN yarn build:use-fake-backend

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]
