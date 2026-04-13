const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const targets = [path.join(root, 'public'), path.join(root, 'src', 'assets')];

function walkPngFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkPngFiles(fullPath, files);
      continue;
    }

    if (path.extname(entry.name).toLowerCase() === '.png') {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertPngToWebp(filePath) {
  const outputPath = filePath.replace(/\.png$/i, '.webp');
  const inputSize = fs.statSync(filePath).size;

  await sharp(filePath)
    .webp({ quality: 78, effort: 6 })
    .toFile(outputPath);

  const outputSize = fs.statSync(outputPath).size;
  return {
    filePath,
    outputPath,
    inputSize,
    outputSize,
  };
}

async function main() {
  const pngFiles = targets.flatMap((dir) => walkPngFiles(dir));
  const results = [];

  for (const filePath of pngFiles) {
    const result = await convertPngToWebp(filePath);
    results.push(result);
  }

  let totalInput = 0;
  let totalOutput = 0;

  for (const result of results) {
    totalInput += result.inputSize;
    totalOutput += result.outputSize;

    const inputKb = Math.round(result.inputSize / 1024);
    const outputKb = Math.round(result.outputSize / 1024);
    const savedPct = (((result.inputSize - result.outputSize) / result.inputSize) * 100).toFixed(1);

    console.log(
      `${path.relative(root, result.filePath)} -> ${path.relative(root, result.outputPath)} | ${inputKb}KB -> ${outputKb}KB (${savedPct}% saved)`
    );
  }

  const totalSavedPct = (((totalInput - totalOutput) / totalInput) * 100).toFixed(1);

  console.log(`\nConverted ${results.length} PNG files to WebP.`);
  console.log(
    `Total size: ${Math.round(totalInput / 1024)}KB -> ${Math.round(totalOutput / 1024)}KB (${totalSavedPct}% saved)`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
