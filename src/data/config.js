// ===== 配置文件 · Customize everything here =====

// 情侣信息
export const coupleInfo = {
  name1: '小明',
  name2: '小红',
  // 标识缩写 (Logo 中间两侧的字母，默认取两人名字首字母)
  initials: 'TD',
  // 在一起的日期 (格式: YYYY-MM-DD)，第一天算入
  anniversary: '2024-08-03',
  // 英文标题
  title: 'Our Love Story',
  // 副标题
  subtitle: '每一天，都是最好的我们',
}

// 相册照片 - 替换为你自己的照片
// 使用方法：把照片放到 public/photos/ 文件夹，然后这里写 /photos/照片名.jpg
// 或者使用网络图片链接（如 https://xxx.com/photo.jpg）
export const photos = [
  {
    src: '/photos/2cats.jpg',  // ← 改成你的本地照片
    caption: '初次相遇',
    date: '2024.08.03',
  },
  {
    src: '/photos/8cat.jpg',
    caption: '第一次约会',
    date: '2024.08.10',
  },
  {
    src: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&h=600&fit=crop',
    caption: '海边漫步',
    date: '2023.07.15',
  },
  {
    src: 'https://images.unsplash.com/photo-1503516459261-40c66117780a?w=600&h=600&fit=crop',
    caption: '夕阳下的承诺',
    date: '2023.08.20',
  },
  {
    src: 'https://images.unsplash.com/photo-1537907516295-7e4f3b93f7e2?w=600&h=600&fit=crop',
    caption: '雨中漫步',
    date: '2023.09.10',
  },
  {
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=600&fit=crop',
    caption: '秋日时光',
    date: '2023.10.05',
  },
  {
    src: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&h=600&fit=crop',
    caption: '雪中的温暖',
    date: '2023.12.25',
  },
  {
    src: 'https://images.unsplash.com/photo-1494774157365-9e19c6701ff0?w=600&h=600&fit=crop',
    caption: '在一起的第100天',
    date: '2023.08.28',
  },
  {
    src: 'https://images.unsplash.com/photo-1483510148760-a345b76a5b9d?w=600&h=600&fit=crop',
    caption: '最美的风景是你',
    date: '2024.01.01',
  },
]

// 音乐播放列表 - 替换为你自己的音乐
// 支持本地音乐 (放在 public/music/ 目录下) 或网络链接
export const playlist = [
  {
    title: 'Can\'t Help Falling in Love',
    artist: 'Elvis Presley',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'A Thousand Years',
    artist: 'Christina Perri',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    title: 'All of Me',
    artist: 'John Legend',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
]

// 情书内容
export const loveLetter = `亲爱的你：

从遇见你的那一刻起，我的世界就被点亮了。

你的笑容像清晨的第一缕阳光，温暖而明亮。你的声音是最美的旋律，让我忍不住一遍遍聆听。

每一天醒来，想到的第一件事就是你；每一个夜晚入睡前，最后想到的还是你。

我们一起走过的日子，无论是晴天还是雨天，都因为有你在身边而变得格外珍贵。

感谢你选择了我，感谢你包容我的不完美。未来的每一天，我都想牵着你的手，一起走过春夏秋冬。

愿我们的爱情，如星辰般永恒，如溪流般绵长。

此生有你，便是最好的时光。`

// 时间线事件
export const timelineEvents = [
  {
    date: '2023.05.20',
    title: '初次相遇',
    desc: '在那个平凡的日子里，命运让我们相遇，从此一切都不再平凡。',
  },
  {
    date: '2023.06.01',
    title: '第一次约会',
    desc: '紧张又期待的那天，我们一起走过的每一步都值得铭记。',
  },
  {
    date: '2023.07.15',
    title: '海边旅行',
    desc: '海风、沙滩、还有你灿烂的笑容，那是最美的夏天。',
  },
  {
    date: '2023.08.28',
    title: '第100天',
    desc: '不知不觉已经走过了100天，每一天都比昨天更喜欢你。',
  },
  {
    date: '2023.12.25',
    title: '第一个圣诞节',
    desc: '在飘雪的冬日里，我们交换了礼物，也交换了更多的温暖。',
  },
  {
    date: '2024.01.01',
    title: '新年快乐',
    desc: '新的一年，新的开始，但身边的人依然是你，这就是最好的安排。',
  },
]
