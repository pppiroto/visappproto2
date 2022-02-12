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