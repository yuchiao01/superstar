#!/bin/bash

# 張凌赫粉絲網站 Docker 啟動腳本

IMAGE_NAME="joychang608/zlh:2"
CONTAINER_NAME="zlh-fansite"
PORT="8080"

# 停止並移除舊容器（如果存在）
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "停止舊容器..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# 啟動新容器
echo "啟動容器..."
docker run -d \
    --name $CONTAINER_NAME \
    -p $PORT:80 \
    --restart always \
    $IMAGE_NAME

echo "✓ 網站已啟動！"
echo "  請開啟 http://localhost:$PORT 查看"
