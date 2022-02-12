# visappproto2
ASP.Net Core + Angular App proto

# 構成
- ソリューション
- ASP.Net + Angularプロジェクト
- ASP.Net テストプロジェクト

```
$ dotnet new sln -o .
$ dotnet new angular -o visappproto2
$ dotnet new xunit -o visappproto2_test
$ dotnet sln add visappproto2
$ dotnet sln add visappproto2_test
$ dotnet add ./visappproto2_test/visappproto2_test.csproj reference ./visappproto2/visappproto2.csproj 
```

## 実行
```
$ cd visappproto2
$ dotnet watch run
```

# [Angular](https://angular.io/)
## CLI
```
$ npm install -g @angular/cli@12.2.2
```

# [Angular Material](https://material.angular.io/)

```
$ cd visappproto2/ClientApp
$ ng add @angular/material

✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
UPDATE package.json (1791 bytes)
✔ Packages installed successfully.
CREATE src/custom-theme.scss (1472 bytes)
UPDATE src/app/app.module.ts (1313 bytes)
UPDATE angular.json (4118 bytes)
UPDATE src/index.html (639 bytes)
UPDATE src/styles.css (396 bytes)
```