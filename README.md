# vv3

该项目为了试用 `github` 的 `Actions` 和 `Pages` 自动部署静态页面。  

1. `package.json`增加`homepage`字段，值为项目部署`uri`
2. `点击头像 -> Settins -> Developer settings -> Personal access tokens -> Generate new token`，需要 `repo` & `workflow` 权限，生成复制token
3. 上传项目
4. `Settings -> Secrets -> New repository secret` 变量名脚本使用
5. `.github/workflows/ci.yml`

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

* [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
