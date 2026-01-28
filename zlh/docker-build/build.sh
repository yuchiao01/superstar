#!/bin/bash
# Build and push zlh Docker image
#
# Usage:
#   ./build.sh        # 使用預設 tag "1"
#   ./build.sh 2      # 指定 tag "2"
#   ./build.sh 1.0.0  # 指定 tag "1.0.0"

set -e

# ============================================
# 配置區 - 根據專案修改以下變數
# ============================================
REGISTRY="yuchiao"
IMAGE_NAME="zlh"
# ============================================

TAG="${1:-1}"
FULL_IMAGE="${REGISTRY}/${IMAGE_NAME}:${TAG}"

echo "Building ${FULL_IMAGE}..."

docker build \
    --provenance=false \
    --platform linux/amd64 \
    --build-arg APP_VERSION="${TAG}" \
    -t "${FULL_IMAGE}" \
    .

echo ""
echo "Build complete!"
echo ""

read -p "Push to registry? (y/N): " PUSH_CONFIRM

if [[ "${PUSH_CONFIRM}" =~ ^[Yy]$ ]]; then
    echo "Pushing ${FULL_IMAGE}..."
    docker push "${FULL_IMAGE}"
    echo "Push complete!"
else
    echo "Skipped push."
fi

echo ""
echo "Image: ${FULL_IMAGE}"
