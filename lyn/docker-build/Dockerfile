# 必須指定平台
FROM --platform=linux/amd64 nginx:alpine

# 必須包含 LABEL
LABEL maintainer="yuchiao"
LABEL version="1.0"
LABEL description="劉宇寧粉絲網站 - 大黃ㄚ頭"

# 支援版本號建置參數
ARG APP_VERSION=1
ENV APP_VERSION=${APP_VERSION}

# 複製網站檔案到 nginx 預設目錄
COPY --chmod=644 src/index.html /usr/share/nginx/html/
COPY --chmod=644 src/styles.css /usr/share/nginx/html/
COPY --chmod=644 src/script.js /usr/share/nginx/html/

# 複製圖片目錄
COPY src/images/ /usr/share/nginx/html/images/

# 複製 nginx 設定檔
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 開放 80 埠
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
