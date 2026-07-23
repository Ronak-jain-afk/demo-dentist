const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Strip imports of framer-motion if it's the only thing imported
  content = content.replace(/import\s*\{\s*(motion|Variants)[^}]*\}\s*from\s*['"]framer-motion['"];?\n/g, '');
  
  // Replace <motion.tagName to <tagName
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');

  // Remove framer-motion props
  // These props can span multiple lines, so we need a robust regex or just remove them
  // We'll use a regex that handles balanced braces for the props, but that's hard in JS regex.
  // Since they are mostly simple like initial={{...}} we can use non-greedy matches.
  content = content.replace(/\s+initial=\{\{[^}]+\}\}/g, '');
  content = content.replace(/\s+initial="[^"]+"/g, '');
  content = content.replace(/\s+animate=\{\{[^}]+\}\}/g, '');
  content = content.replace(/\s+animate="[^"]+"/g, '');
  content = content.replace(/\s+whileInView=\{\{[^}]+\}\}/g, '');
  content = content.replace(/\s+viewport=\{\{[^}]+\}\}/g, '');
  content = content.replace(/\s+transition=\{\{[^}]+\}\}/g, '');
  content = content.replace(/\s+variants=\{[^}]+\}/g, '');

  fs.writeFileSync(filePath, content);
  console.log('Stripped motion from ' + file);
});
