#!/bin/bash

# 張凌赫粉絲網站 Docker 建置腳本

set -e

# 設定變數
IMAGE_NAME="yuchiao/zlh"
IMAGE_TAG="${1:-latest}"
FULL_IMAGE_NAME="${IMAGE_NAME}:${IMAGE_TAG}"

echo "=========================================="
echo "  張凌赫粉絲網站 Docker 建置腳本"
echo "=========================================="
echo ""

# 切換到專案根目錄
cd "$(dirname "$0")"

echo "[1/3] 建置 Docker 映像檔..."
echo "      映像檔名稱: ${FULL_IMAGE_NAME}"
docker build -t "${FULL_IMAGE_NAME}" -f docker/Dockerfile .

echo ""
echo "[2/3] 建置完成！映像檔資訊："
docker images "${IMAGE_NAME}" --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"

echo ""
echo "[3/3] 使用方式："
echo ""
echo "  本機執行容器："
echo "    docker run -d -p 8080:80 --name zlh-fansite ${FULL_IMAGE_NAME}"
echo ""
echo "  推送到 Docker Hub："
echo "    docker push ${FULL_IMAGE_NAME}"
echo ""
echo "  使用 docker-compose："
echo "    cd docker && docker-compose up -d"
echo ""
echo "=========================================="
echo "  建置成功！"
echo "=========================================="
