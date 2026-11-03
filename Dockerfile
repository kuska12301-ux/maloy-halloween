FROM node:24-alpine
WORKDIR /app
COPY package.json server.js ./
COPY --chown=node:node public /opt/site
RUN chmod -R a+rX /opt/site
ENV NODE_ENV=production
ENV PORT=3000
ENV STATIC_ROOT=/opt/site
EXPOSE 3000
USER node
CMD ["node", "server.js"]
