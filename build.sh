npm run build
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 --push --tag fazenda/anilistbot .
docker buildx imagetools inspect fazenda/anilistbot
