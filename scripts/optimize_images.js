import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const portfolioDir = './src/assets/portfolio';

async function run() {
  const files = fs.readdirSync(portfolioDir);
  console.log(`Found ${files.length} files in ${portfolioDir}\n`);

  const results = [];

  for (const file of files) {
    if (file.endsWith('.tmp')) continue;
    const filePath = path.join(portfolioDir, file);
    const stat = fs.statSync(filePath);
    const oldSize = stat.size;

    try {
      const inputBuffer = fs.readFileSync(filePath);
      const metadata = await sharp(inputBuffer).metadata();
      const width = metadata.width || 0;
      const height = metadata.height || 0;

      let pipeline = sharp(inputBuffer);
      if (width > 1200) {
        pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
      }

      let outputBuffer;
      if (file.endsWith('.webp')) {
        outputBuffer = await pipeline.webp({ quality: 78, effort: 6 }).toBuffer();
      } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        outputBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      } else if (file.endsWith('.png')) {
        outputBuffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
      } else {
        continue;
      }

      const newSize = outputBuffer.length;
      if (newSize < oldSize) {
        fs.writeFileSync(filePath, outputBuffer);
      }

      const finalMeta = await sharp(fs.readFileSync(filePath)).metadata();
      const finalStat = fs.statSync(filePath);
      const reduction = (((oldSize - finalStat.size) / oldSize) * 100).toFixed(1);

      results.push({
        File: file,
        'Old Size': `${(oldSize / 1024).toFixed(1)} KB`,
        'New Size': `${(finalStat.size / 1024).toFixed(1)} KB`,
        Reduction: `${reduction}%`,
        'Original Dim': `${width}x${height}`,
        'New Dim': `${finalMeta.width}x${finalMeta.height}`,
        Format: finalMeta.format
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  console.table(results);
}

run();
