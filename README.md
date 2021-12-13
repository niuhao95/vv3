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

## 问题记录

### 配置 Alias

```js
// vite.config.ts
import {
    resolve
} from "path" // 找不到 path 模块报错 -> pnpm add @types/node -D

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    }
})
```

### $attrs

`<script setup>` 可以和普通的 `<script>` 一起使用 | [文档解释](https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%B8%8E%E6%99%AE%E9%80%9A%E7%9A%84-script-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)

```vue
<script lang="ts">
// 声明额外的选项
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
defineProps <{
    modelValue: number | string
}>()

// 解决: Property 'value' does not exist on type 'EventTarget'.
const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value
</script>

<template>
  <div>
    <!-- attrs: https://labs.thisdot.co/blog/build-advanced-components-in-vue-3-using-usdattrs -->
    <input v-bind="$attrs" type="range" :value="modelValue" @input="$emit('update:modelValue', handleInputChange($event))">
  </div>
</template>
```
