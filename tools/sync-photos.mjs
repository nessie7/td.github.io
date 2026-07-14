#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const photosDir = path.join(root, 'public', 'photos')
const autoJsonPath = path.join(root, 'src', 'data', 'photos-auto.json')

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.avif'])

function filenameToCaption(filename) {
  let name = filename.replace(/\.[^.]+$/, '')
  name = name.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  return name.charAt(0).toUpperCase() + name.slice(1)
}

if (!fs.existsSync(photosDir)) {
  console.error('❌ 未找到目录:', photosDir)
  console.error('请先创建 public/photos/ 目录并放入照片')
  process.exit(1)
}

const files = fs.readdirSync(photosDir)
const imageFiles = files
  .filter(f => IMAGE_EXT.has(path.extname(f).toLowerCase()))
  .sort()

if (imageFiles.length === 0) {
  console.error('❌ public/photos/ 中没有找到图片文件')
  process.exit(1)
}

const existingEntries = []
if (fs.existsSync(autoJsonPath)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(autoJsonPath, 'utf-8'))
    existingEntries.push(...parsed)
  } catch {
    console.warn('⚠️  photos-auto.json 解析失败，将重新生成')
  }
}
const existingMap = new Map(existingEntries.map(item => [item.src, item]))

const result = imageFiles.map(filename => {
  const src = `photos/${filename}`
  const existing = existingMap.get(src)
  if (existing) return existing
  return { src, caption: filenameToCaption(filename) }
})

const existingSources = new Set(imageFiles.map(f => `photos/${f}`))
const removed = existingEntries.filter(item => !existingSources.has(item.src))
if (removed.length > 0) {
  console.log(`⚠️ 检测到 ${removed.length} 张照片已从文件夹移除:`)
  removed.forEach(r => console.log(`   - ${r.src}`))
}

fs.writeFileSync(autoJsonPath, JSON.stringify(result, null, 2) + '\n', 'utf-8')

console.log(`✅ 扫描完成: ${imageFiles.length} 张照片`)
console.log(`✅ 已生成: ${path.relative(root, autoJsonPath)}`)
console.log('')
console.log('💡 可直接编辑 src/data/photos-auto.json 中的 caption/date')
console.log('💡 再次运行此脚本会保留你已修改的 caption/date')
