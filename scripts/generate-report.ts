import fs from 'fs';
import path from 'path';
import { generateExperienceReport } from '../src/utils/generateExperienceReport';
import { projectsData } from '../src/data/projects';
import { profileData } from '../src/data/profile';

console.log('Generating Project Experience Report PDF from projectsData...');

try {
  const doc = generateExperienceReport(projectsData, profileData);
  const pdfArrayBuffer = doc.output('arraybuffer');
  const buffer = Buffer.from(pdfArrayBuffer);

  const outDir = path.resolve(process.cwd(), 'public/docs');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Emmanuel_Atakos_Project_Experience_Report.pdf');
  fs.writeFileSync(outPath, buffer);

  console.log(`Successfully generated: ${outPath} (${buffer.length} bytes)`);
} catch (err) {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
}
