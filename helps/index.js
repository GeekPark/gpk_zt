import fs from 'fs';


export const includeWebpackScripts = (...opt) => {
  const generateHtmlStr = key => {
    try {
      const manifest = fs.readFileSync('../public/webpack_manifest.json');
      return `<script text="text/javascript" src="/${manifest[key]}.js"></script>`;
    } catch (e) {
      return `<script text="text/javascript" src="/${key}.js"></script>`;
    }
  };

  return opt.map(item => generateHtmlStr(item)).join('');
};
