FROM nginx:alpine

# 複製網站檔案到 nginx 預設目錄
COPY --chmod=644 index.html /usr/share/nginx/html/
COPY --chmod=644 styles.css /usr/share/nginx/html/
COPY --chmod=644 script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

# 設定檔案權限
RUN chmod -R 755 /usr/share/nginx/html/images/

# 複製 nginx 設定檔
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# 開放 80 埠
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
