---
description: "Git 提交流程：更新文檔並提交所有變更"
allowed-tools: ["Bash", "Read", "Write", "Edit", "Grep", "Glob"]
---

# Git 提交流程

執行完整的 Git 提交流程，包含文檔更新。

## 檔案說明

- **README.md**: Repo 說明文件
- **CLAUDE.md**: AI 運作時參考的說明
- **CHANGELOG.md**: 紀錄變更

## 執行步驟

1. 分析 repo 目前的變更內容（git status, git diff）
2. **判斷 Staged 狀態**：
   - 執行 `git diff --cached --name-only` 檢查是否有已 staged 的檔案
   - **有 staged 檔案**：只處理這些已 staged 的檔案，不要執行 `git add -A`
   - **沒有 staged 檔案**：執行 `git add -A` 加入所有變更
3. **Code Review**（根據變更規模調整深度）
   - **檢查項目**：
     - �� 安全：硬編碼密碼/token、SQL injection、command injection、敏感資訊外洩
     - �� 邏輯：空值處理、邊界條件、錯誤處理、race condition
     - ⚡ 效能：N+1 查詢、無限迴圈風險、記憶體洩漏
     - �� 風格：命名一致性、死碼、過度複雜
   - **處理方式**：
     - 小型變更（< 50 行）：直接檢查
     - 中型變更（50-200 行）：逐檔案檢查
     - 大型變更（> 200 行）：使用 Task tool 啟動獨立 review agent
   - **阻擋條件**（發現以下問題必須修復後才能提交）：
     - 硬編碼的密碼、API key、token
     - 明顯的安全漏洞
     - 會導致服務中斷的邏輯錯誤
4. 根據變更內容更新相關文檔：
   - 若有新功能或重大變更，更新 README.md
   - 若有影響 AI 操作的變更，更新 CLAUDE.md
     - **自動精簡分析**：
       - 檢查是否有過時的範例或冗長說明可移除
       - 將重複的配置範例改為簡短參考
       - 移除已退役環境的詳細說明（保留列表即可）
       - 目標：維持 CLAUDE.md 在 600-700 行以內
   - **CHANGELOG.md 智能更新**：
     - 先檢查變更檔案所在目錄是否有獨立的 CHANGELOG.md（如 `report/CHANGELOG.md`）
     - 若有，檢查該 CHANGELOG 是否已包含本次變更的內容（日期、描述相符）
     - **已有正確記錄**：跳過根目錄 CHANGELOG.md 更新，避免重複記錄
     - **沒有記錄或內容不完整**：更新對應的 CHANGELOG.md
     - 根目錄 CHANGELOG.md 只記錄其他沒有 CHANGELOG.md 檔案的目錄變更
5. 建立 Git commit：
   - **若使用者有提供說明（$ARGUMENTS 不為空）**：直接使用該說明作為 commit message 的主要內容
   - **若使用者未提供說明**：根據變更內容自動產生描述
6. 推送到遠端 repo

## 注意事項

- 優先使用使用者提供的說明作為 commit message
- Commit message 使用繁體中文
- CHANGELOG.md 格式遵循 Keep a Changelog 規範
- 確保不提交任何機密資訊（密碼、金鑰等）