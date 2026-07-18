// ===== 配置文件 · Customize everything here =====

// 情侣信息
export const coupleInfo = {
  name1: '谭卓',
  name2: '戴艳',
  // 标识缩写 (Logo 中间两侧的字母，默认取两人名字首字母)
  initials: 'TD',
  // 在一起的日期 (格式: YYYY-MM-DD)，第一天算入
  anniversary: '2024-08-03',
  // 英文标题
  title: 'Love Story',
  // 副标题
  subtitle: '每一天，都是最好的我们',
}

// ===== 照片配置（二选一） =====
// 
// 方案 A（推荐）：照片丢到 public/photos/ 文件夹，运行 npm run sync-photos
//                自动生成 src/data/photos-auto.json，caption 从文件名提取
//                编辑 photos-auto.json 可修改 caption/date
//                再次运行 sync-photos 会保留你修改过的 caption/date
//
// 方案 B：手动配置——直接修改下面的 manualOverrides 数组
//         src 填 "photos/文件名.jpg"（本地）或完整 URL（网络图片）
//         优先级高于方案 A 的同名照片

import autoPhotos from './photos-auto.json'

const manualOverrides = [
  // 示例：手动给某张照片覆盖 caption/date
  // { src: 'photos/wuhan_bed.jpg', caption: '初次相遇' },
  //
  // 示例：网络图片（放入下面数组即可，无需放在 public/photos/）
  // { src: 'https://...jpg', caption: '描述', date: '2024.01.01' },
]

// 合并逻辑：手动条目按 src 覆盖自动条目；网络图片直接追加
const autoMap = new Map(autoPhotos.map(p => [p.src, p]))
manualOverrides.forEach(p => { if (autoMap.has(p.src)) autoMap.set(p.src, p) })
const extraManual = manualOverrides.filter(p => !p.src.startsWith('photos/'))

export const photos = [...autoMap.values(), ...extraManual]

// 音乐播放列表 - 替换为你自己的音乐
// 支持本地音乐 (放在 public/music/ 目录下) 或网络链接
export const playlist = [
  {
    title: '午后慵懒1',
    artist: 'Minimax',
    src: 'music/午后慵懒1.mp3',
  },
  {
    title: '午后慵懒2',
    artist: 'Minimax',
    src: 'music/午后慵懒2.mp3',
  },
  {
    title: '你是我的光',
    artist: 'Minimax',
    src: 'music/你是我的光.mp3',
  },
  {
    title: '星晴',
    artist: '周杰伦',
    src: 'music/周杰伦 - 星晴.mp3',
  },
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    src: 'music/Taylor+Swift-Lover.mp3',
  },


]

// 情书内容
export const loveLetter = `亲爱的谭咪卓：

从没有见过跟你一样可爱、帅气又迷人的男生，那天在实验室第一次见面，你大大的眼睛，长长的睫毛，像小狗一样卷曲的头发，那个画面我记了很久很久。

你的声音响亮，中气十足，唱歌的时候又很有少年感，唱歌很好听（但是宝宝遇到高音总是瞎唱）。

我们一起走过的日子，无论是晴天还是雨天，不管是吵架，还是甜蜜，那些日子都因为有你在身边而变得格外珍贵。

感谢你选择了我，感谢你包容我的不完美（虽然也对我重拳出击）。未来的每一天，我都想牵着你的手，一起走过春夏秋冬。

愿我们的爱情，如星辰般永恒，如溪流般绵长。

此生有你，便是最好的时光。`

// 时间线事件
export const timelineEvents = [
  {
    date: '1995.10.27',
    title: '小戴破蛋',
    desc: '在那个平凡的日子里，小戴呱呱坠地。',
  },
  {
    date: '1999.08.02',
    title: '小谭破蛋',
    desc: '紧张又期待的那天，小谭呱呱坠地。',
  },
  {
    date: '2022.09',
    title: '开学',
    desc: '校园重启！',
  },
  {
    date: '2024.6',
    title: '毕业季',
    desc: '小谭心底藏偏爱，\n偏偏就要耍小戴，\n爱意千般说不开，\n张口只道不喜爱。',
  },
  {
    date: '2024.07.02',
    title: '小戴去杭州实习',
    desc: '前日撩戴至夜深，\n清晨骤雨扰行人，\n小戴冒雨登车去，\n孤身奔赴杭州城。',
  },
  {
    date: '2024.07.xx',
    title: '同游南昌',
    desc: '手捧葵花赴路途，\n同游南昌共漫步，\n入夜娇憨黏身旁，\n软身轻靠小戴处。',
  },
  {
    date: '2024.08.02',
    title: '小谭生日',
    desc: '小谭生辰赴钱塘，\n布艺葵花戴相藏，\n悉心为他庆生辰，\n娇嗔求伴共眠床。',
  },
  {
    date: '2024.09.18',
    title: '小戴结束实习',
    desc: '实习落幕结伴行，\n同游长沙赴佳景，\n拜见双亲笑语盈，\n咖啡甜点伴温情。',
  },
  {
    date: '2024.10.27',
    title: '小戴生日',
    desc: '生日前番起争端，\n当日和解两相欢，\n外出约会共加餐，\n归家同切元祖甜。',
  },
  {
    date: '2024.某个秋日',
    title: '小谭螃蟹瘾大发',
    desc: '小谭馋蟹心痒痒，\n偕戴盒马尽兴尝，\n蟹肉吃罢意犹长，\n再啃肉筋味超香。',
  },
  {
    date: '2025.06',
    title: '小谭和小戴毕业',
    desc: '小戴离宁返武昌，\n相伴同拍毕业相，\n眉眼温柔情意长，\n甜甜蜜蜜好风光。',
  },
  {
    date: '2025.08.02',
    title: '小谭生日',
    desc: '小谭小戴赴海鲜盛宴，\n满心期待佳肴摆满案。\n两人肚饱菜剩一大片，\n小谭嘴馋冰淇淋甜点。\n浅尝两口甜腻难下咽，\n剩糕全盘交由小戴垫。',
  },
  {
    date: '2025.10',
    title: '小谭和小戴见家长',
    desc: '相伴登门至戴宅，\n膏黄肥蟹佐开怀，\n随卿归见谭家亲，\n香辣湘肴叙情深。',
  },
  {
    date: '2026.01',
    title: '小谭和小戴共庆祝元旦',
    desc: '小谭小戴度元旦，\n山姆购入牛与糕。\n围家涮锅暖意满满，\n创新天地相伴游玩。\n甜蜜约会尽兴狂欢，\n归途双双染上风寒',
  },
  {
    date: '2026.05.01',
    title: '小谭和小戴共度劳动节',
    desc: '佳节相会在南京，\n寿喜锅香伴同行，\n漫步莫愁湖畔景，\n梧桐飘絮扰佳人，\n肌肤敏感难安稳，\n美中略带小烦心。',
  },
  {
    date: '2026.05.15',
    title: '小谭爸妈来扬州',
    desc: '谭家双亲至扬州，\n淮扬佳肴解清愁，\n闲游一汪瘦西湖，\n风光满目意悠悠。',
  },
  {
    date: '2026.06',
    title: '小谭和小戴同游南京吃饭',
    desc: '小谭小戴同住丹凤街，\n共看玩具总动员系列。\n各色美食轮番尝遍，\n朝夕相伴欢喜不绝。',
  },
  {
    date: 'To be continued',
    title: '未完待续......',
    desc: '',
  },
  
  
]
