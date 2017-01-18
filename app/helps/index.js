import fs from 'fs';

export const includeWebpackScripts = (...opt) => {
  const generateHtmlStr = key => {
    try {
      const manifest = fs.readFileSync('public/assets/js/webpack_manifest.json');
      const m = JSON.parse(manifest.toString());
      return `<script text="text/javascript" src="/assets/js/${m[key]}"></script>`;
    } catch (e) {
      console.log(e);
      return `<script text="text/javascript" src="/assets/${key}"></script>`;
    }
  };

  return opt.map(item => generateHtmlStr(item)).join('');
};
