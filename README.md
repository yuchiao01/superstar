# 張凌赫粉絲網站

一個由粉絲自發建立的張凌赫（Zhang Linghe）非官方介紹網站。

## 網站功能

- **首頁** - 動態橫幅輪播、個人基本資訊展示
- **個人簡介** - 詳細個人資料（本名、生日、身高、畢業院校等）
- **作品列表** - 電視劇、電影、綜藝作品展示，支援分類篩選
- **相片集** - 照片展示區
- **粉絲專區** - 暱稱（牛牛）、粉絲名（核桃）、應援色（#971230）
- **最新動態** - 相關新聞與活動資訊

## 技術架構

- **前端**: 純 HTML5 + CSS3 + JavaScript（無框架）
- **Web Server**: Nginx (Alpine)
- **部署**: Docker 容器化

## 快速開始

### 方式一：Docker 部署（推薦）

```bash
# 建置映像檔
./build.sh

# 或指定版本號
./build.sh v1.0

# 執行容器
docker run -d -p 8080:80 --name zlh-fansite joychang608/zlh:latest
```

### 方式二：使用 Docker Compose

```bash
cd docker
docker-compose up -d
```

### 方式三：本機直接開啟

直接用瀏覽器開啟 `index.html` 即可預覽（部分功能可能受限）。

## 專案結構

```
superstar/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── script.js           # 互動腳本
├── images/             # 圖片資源
│   ├── drama-*.jpg     # 戲劇劇照
│   └── variety-*.jpg   # 綜藝節目照
├── docker/
│   ├── Dockerfile      # Docker 映像檔配置
│   ├── docker-compose.yml
│   ├── docker-start.sh # 容器啟動腳本
│   └── nginx.conf      # Nginx 配置
├── build.sh            # 建置腳本
└── README.md
```

## Docker 相關指令

```bash
# 建置映像檔
./build.sh [tag]

# 啟動容器
./docker/docker-start.sh

# 停止容器
docker stop zlh-fansite

# 查看日誌
docker logs zlh-fansite

# 推送到 Docker Hub
docker push joychang608/zlh:latest
```

## 瀏覽網站

啟動後開啟瀏覽器訪問：http://localhost:8080

## 注意事項

- 本網站僅供粉絲交流使用
- 圖片版權歸原作者所有
- 如有侵權請聯繫刪除

## License

本專案僅供學習交流使用。
