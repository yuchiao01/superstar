FROM nginx:alpine

# 複製網站檔案到 nginx 預設目錄
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

# 複製 nginx 設定檔
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# 開放 80 埠
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
