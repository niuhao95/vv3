# vv3

使用 `github` 的 `Actions` 和 `Pages` 自动部署[静态页面](https://hao951029.github.io/vv3)。   

## 步骤

1. 项目的`package.json`文件增加`homepage`字段，值为项目部署`uri`
2. 获取一个拥有项目`repo`权限的`token`,编写`.yml`脚本时提供给需要使用部署功能的`action`使用
  + 路径`Settins -> Developer settings -> Personal access tokens -> Generate new token`
  + 注意需要有`repo`&`workflow`权限
3. 在`github`增加`secret`变量,`.yml`脚本要用到
  + 路径`Settings -> Secrets -> New repository secret`
4. 编写`.yml`脚本,示例可查看项目`.github/workflows/ci.yml`
5. `push`代码,触发`Actions`
