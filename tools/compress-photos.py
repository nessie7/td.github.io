"""压缩并缩小照片到适合网页的大小"""
import os
from PIL import Image

photos_dir = 'public/photos'
extensions = ('.jpg', '.jpeg', '.png')
max_dim = 1600
total_old = 0
total_new = 0
count = 0
errors = []

for fname in sorted(os.listdir(photos_dir)):
    if not fname.lower().endswith(extensions):
        continue
    fpath = os.path.join(photos_dir, fname)
    old_size = os.path.getsize(fpath)
    total_old += old_size

    try:
        with Image.open(fpath) as img:
            # Convert to RGB if needed (for RGBA PNG etc.)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            w, h = img.size
            # Resize if larger than max_dim on the longest edge
            if max(w, h) > max_dim:
                if w >= h:
                    new_w, new_h = max_dim, int(h * max_dim / w)
                else:
                    new_h, new_w = max_dim, int(w * max_dim / h)
                img = img.resize((new_w, new_h), Image.LANCZOS)

            img.save(fpath, quality=85, optimize=True)
            new_size = os.path.getsize(fpath)
            total_new += new_size
            ratio = 100 - new_size * 100 // old_size if old_size > 0 else 0
            print(f'  {fname}: {old_size//1024}KB -> {new_size//1024}KB ({ratio}% off)')
            count += 1
    except Exception as e:
        errors.append((fname, str(e)))
        # Restore from git if corrupted
        os.system(f'git checkout -- "{fpath}"')
        print(f'  {fname}: 跳过（{e}）')

print(f'\n处理完成: {count} 张')
if errors:
    print(f'跳过: {len(errors)} 张（原文件已恢复）')
    for f, e in errors:
        print(f'  - {f}: {e}')
print(f'总计: 压缩前 {total_old//1024//1024}MB -> 压缩后 {total_new//1024//1024}MB')
print(f'节省: {100-total_new*100//total_old}%')
