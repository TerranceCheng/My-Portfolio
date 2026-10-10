# Terrance Cheng — Portfolio

A modern, light-themed developer portfolio built with React + Vite.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (output in dist/)
npm run lint     # oxlint
```

## Adding your images & videos

All content lives in `src/data.js`.

1. Drop files into `src/assets/` (e.g. `profile.jpg`, `projects/threatsight.png`, `projects/threatsight.mp4`).
2. Import them at the top of `src/data.js`:

   ```js
   import profileImg from './assets/profile.jpg'
   import threatsightImg from './assets/projects/threatsight.png'
   import threatsightDemo from './assets/projects/threatsight.mp4'
   ```

3. Assign them:

   - Portrait → `profile.image = profileImg`
   - Project screenshot → `image: threatsightImg`
   - Project demo video → `video: threatsightDemo`

Any field left as `''` keeps showing the dashed placeholder.

## Editing content

- **Bio, contact, resume link** → `profile` in `src/data.js`
- **Jobs & bullets** → `experience`
- **Projects** → `projects` (set `featured: true` to span two columns)
- **Skills** → `skillGroups` / `marqueeItems`
- **Education & awards** → `education` / `awards`
- **Colours & typography** → CSS variables in `src/index.css`
