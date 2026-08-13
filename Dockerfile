FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# NEXT_PUBLIC_* are inlined into the client bundle at BUILD time, so they must be
# present now — .env.local is dockerignored and only reaches the container at
# runtime, which is too late for these. docker compose passes them as build args
# (sourced from .env.local via `--env-file`). All are public-by-design values.
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_CALCOM_URL
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_GOOGLE_ADS_ID
ARG NEXT_PUBLIC_ADS_LABEL_CONTACT
ARG NEXT_PUBLIC_ADS_LABEL_BOOKING
ARG NEXT_PUBLIC_ADS_LABEL_BOOKING_CONFIRMED
ARG NEXT_PUBLIC_ADS_LABEL_CALL
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL \
    NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY \
    NEXT_PUBLIC_CALCOM_URL=$NEXT_PUBLIC_CALCOM_URL \
    NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID \
    NEXT_PUBLIC_GOOGLE_ADS_ID=$NEXT_PUBLIC_GOOGLE_ADS_ID \
    NEXT_PUBLIC_ADS_LABEL_CONTACT=$NEXT_PUBLIC_ADS_LABEL_CONTACT \
    NEXT_PUBLIC_ADS_LABEL_BOOKING=$NEXT_PUBLIC_ADS_LABEL_BOOKING \
    NEXT_PUBLIC_ADS_LABEL_BOOKING_CONFIRMED=$NEXT_PUBLIC_ADS_LABEL_BOOKING_CONFIRMED \
    NEXT_PUBLIC_ADS_LABEL_CALL=$NEXT_PUBLIC_ADS_LABEL_CALL
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
