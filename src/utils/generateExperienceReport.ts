import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { projectsData, ProjectItem } from '../data/projects';
import { profileData, ProfileData } from '../data/profile';

/**
 * Dynamically generates a publication-quality Project Experience Report PDF
 * directly from projectsData and profileData.
 */
export function generateExperienceReport(
  projects: ProjectItem[] = projectsData,
  profile: ProfileData = profileData
): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const darkNavy = [15, 23, 42];     // #0f172a
  const slateText = [71, 85, 105];   // #475569
  const lightBg = [248, 250, 252];   // #f8fafc
  const emerald = [5, 150, 105];     // #059669
  const borderGrey = [226, 232, 240];// #e2e8f0

  let y = margin;

  /* =====================================================================
     PAGE 1: COVER & EXECUTIVE SUMMARY
     ===================================================================== */

  // Top Accent Bar
  doc.setFillColor(emerald[0], emerald[1], emerald[2]);
  doc.rect(0, 0, pageWidth, 4, 'F');

  // Header Title
  y = 15;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text(profile.name.toUpperCase(), margin, y);

  // Subtitle / Engineering Discipline
  y += 6;
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.text('ELECTRICAL & SOLAR PV ENGINEER | BESS & IOT SPECIALIST', margin, y);

  // Regulatory & Professional Credentials Badges
  y += 5.5;
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(slateText[0], slateText[1], slateText[2]);
  const credentialsText = 'EBK Reg: B25236 (Graduate Engineer)  |  EPRA License: Class T3 Solar PV  |  IEK Graduate Member';
  doc.text(credentialsText, margin, y);

  // Contact Info Row
  y += 4.5;
  doc.setFontSize(8);
  doc.setTextColor(slateText[0], slateText[1], slateText[2]);
  const contactText = `Email: ${profile.contact.email}  |  Phone: ${profile.contact.phone}  |  Location: ${profile.contact.location}  |  Portfolio: github.com/Atakos254`;
  doc.text(contactText, margin, y);

  // Divider Line
  y += 3.5;
  doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);

  // Report Title Banner
  y += 7;
  doc.setFillColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('COMPREHENSIVE SOLAR PV, BESS & ENERGY SYSTEMS PROJECT REPORT', margin + 4, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(203, 213, 225);
  const reportSubtitle = `Master Engineering Dossier — ${projects.length} Field Installations & Industrial Telemetry Deployments`;
  doc.text(reportSubtitle, margin + 4, y + 10.5);

  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  doc.setFont('helvetica', 'bold');
  doc.text(`DATE: ${dateStr.toUpperCase()}`, pageWidth - margin - 35, y + 8.5);

  y += 18;

  // Executive Metric Highlights Cards
  const cardGap = 3;
  const numCards = 4;
  const cardWidth = (contentWidth - cardGap * (numCards - 1)) / numCards;
  const cardHeight = 15;

  // Calculate dynamic totals from active projects
  let totalKWp = 0;
  projects.forEach(p => {
    const match = p.pvArray.match(/[\d,]+\.?\d*\s*(?:kWp|MWp|MWp DC)/i);
    if (match) {
      const num = parseFloat(match[0].replace(',', ''));
      totalKWp += /MWp/i.test(match[0]) ? num * 1000 : num;
    }
  });

  const metrics = [
    { label: 'TOTAL SOLAR PV', value: totalKWp >= 1000 ? `${(totalKWp / 1000).toFixed(2)} MWp` : `${totalKWp.toFixed(0)} kWp` },
    { label: 'UTILITY HIGH-VOLTAGE', value: '1,500 VDC Bus' },
    { label: 'COMMISSIONED SITES', value: `${projects.length} Projects` },
    { label: 'BESS STORAGE DEPLOYED', value: '500+ kWh' },
  ];

  metrics.forEach((m, idx) => {
    const cx = margin + idx * (cardWidth + cardGap);
    doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
    doc.roundedRect(cx, y, cardWidth, cardHeight, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(slateText[0], slateText[1], slateText[2]);
    doc.text(m.label, cx + 2.5, y + 4.8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.text(m.value, cx + 2.5, y + 11.5);
  });

  y += cardHeight + 6;

  // Section Heading: Master Project Matrix
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text('1. MASTER PROJECT SUMMARY MATRIX', margin, y);

  y += 2.5;

  // Master Summary Table (AutoTable)
  const tableData = projects.map((p, i) => [
    String(i + 1).padStart(2, '0'),
    p.title,
    p.client,
    p.category,
    p.pvArray.split('(')[0].trim(),
    p.inverterCapacity.split('(')[0].trim(),
    p.batteryStorage.split('(')[0].trim(),
    p.status,
  ]);

  autoTable(doc, {
    startY: y,
    head: [['#', 'Project Title', 'Client', 'Category', 'PV Array', 'Inverter AC', 'Storage (BESS)', 'Status']],
    body: tableData,
    margin: { left: margin, right: margin },
    theme: 'grid',
    styles: {
      fontSize: 6.8,
      cellPadding: 1.5,
      textColor: [30, 41, 59],
      lineColor: [226, 232, 240],
      lineWidth: 0.15,
      overflow: 'linebreak',
    },
    headStyles: {
      fillColor: [15, 23, 42],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 7,
      halign: 'left',
    },
    columnStyles: {
      0: { cellWidth: 7, halign: 'center', fontStyle: 'bold' },
      1: { cellWidth: 42, fontStyle: 'bold' },
      2: { cellWidth: 26 },
      3: { cellWidth: 24 },
      4: { cellWidth: 22 },
      5: { cellWidth: 24 },
      6: { cellWidth: 22 },
      7: { cellWidth: 15, halign: 'center' },
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },
  });

  /* =====================================================================
     PAGES 2+: DETAILED TECHNICAL PROJECT DOSSIER
     ===================================================================== */

  doc.addPage();
  y = margin + 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text('2. DETAILED TECHNICAL SPECIFICATIONS & INSTALLATION RECORDS', margin, y);

  y += 2;
  doc.setDrawColor(emerald[0], emerald[1], emerald[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin + 40, y);

  y += 5;

  projects.forEach((project, idx) => {
    // Check if remaining page height is sufficient for next project block (~58mm), else add page
    if (y > pageHeight - 55) {
      doc.addPage();
      y = margin + 6;
    }

    // Project Header Ribbon
    doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
    doc.roundedRect(margin, y, contentWidth, 7, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    const headerTitle = `${String(idx + 1).padStart(2, '0')}. ${project.title}`;
    doc.text(headerTitle, margin + 2.5, y + 4.8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(emerald[0], emerald[1], emerald[2]);
    doc.text(`${project.category.toUpperCase()} | ${project.status.toUpperCase()}`, pageWidth - margin - 50, y + 4.8);

    y += 9;

    // Metadata Sub-row
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(slateText[0], slateText[1], slateText[2]);
    const metaLine = `Client: ${project.client}   |   Location: ${project.location}   |   Period: ${project.period}   |   Contractor: ${project.employerContractor}`;
    doc.text(metaLine, margin + 2, y);

    y += 4;

    // Technical Specs Grid Row
    const specColWidth = contentWidth / 4;
    const specBoxHeight = 10;

    const specs = [
      { label: 'PV ARRAY (DC)', val: project.pvArray.split('(')[0].trim() },
      { label: 'INVERTER (AC)', val: project.inverterCapacity.split('(')[0].trim() },
      { label: 'STORAGE (BESS)', val: project.batteryStorage.split('(')[0].trim() },
      { label: 'INVERTER BRAND', val: project.inverterBrand || 'Standard' },
    ];

    specs.forEach((s, sIdx) => {
      const sx = margin + sIdx * specColWidth;
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
      doc.rect(sx, y, specColWidth, specBoxHeight, 'D');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(slateText[0], slateText[1], slateText[2]);
      doc.text(s.label, sx + 2, y + 3.5);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.2);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text(doc.splitTextToSize(s.val, specColWidth - 4)[0] || s.val, sx + 2, y + 7.5);
    });

    y += specBoxHeight + 3.5;

    // Summary Narrative
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.text('Engineering Summary:', margin + 2, y);

    y += 3.2;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(slateText[0], slateText[1], slateText[2]);
    const summaryLines = doc.splitTextToSize(project.summary, contentWidth - 4);
    doc.text(summaryLines, margin + 2, y);
    y += summaryLines.length * 3 + 2;

    // Narrative: Challenge & Solution if available
    if (project.narrative) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.8);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text('Operational Challenge: ', margin + 2, y);

      const challengeOffset = doc.getTextWidth('Operational Challenge: ');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(slateText[0], slateText[1], slateText[2]);
      const challengeLines = doc.splitTextToSize(project.narrative.challenge, contentWidth - challengeOffset - 4);
      doc.text(challengeLines, margin + 2 + challengeOffset, y);
      y += challengeLines.length * 2.8 + 1.5;

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(emerald[0], emerald[1], emerald[2]);
      doc.text('Engineering Solution: ', margin + 2, y);

      const solutionOffset = doc.getTextWidth('Engineering Solution: ');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(slateText[0], slateText[1], slateText[2]);
      const solutionLines = doc.splitTextToSize(project.narrative.solution, contentWidth - solutionOffset - 4);
      doc.text(solutionLines, margin + 2 + solutionOffset, y);
      y += solutionLines.length * 2.8 + 2;
    }

    // Key Highlights (Bullet points)
    if (project.keyHighlights && project.keyHighlights.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.8);
      doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
      doc.text('Key Technical Highlights:', margin + 2, y);
      y += 3;

      project.keyHighlights.slice(0, 3).forEach(h => {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(emerald[0], emerald[1], emerald[2]);
        doc.text('•', margin + 3, y);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(slateText[0], slateText[1], slateText[2]);
        const hLines = doc.splitTextToSize(h, contentWidth - 9);
        doc.text(hLines, margin + 6, y);
        y += hLines.length * 2.8 + 0.8;
      });
    }

    // Technology Stack tags row
    if (project.technologies && project.technologies.length > 0) {
      y += 1;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.2);
      doc.setTextColor(slateText[0], slateText[1], slateText[2]);
      const techText = `Technologies: ${project.technologies.join('  •  ')}`;
      doc.text(techText, margin + 2, y);
      y += 3;
    }

    // Subtle line divider after each project
    doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, y + 1, pageWidth - margin, y + 1);

    y += 5;
  });

  /* =====================================================================
     RUNNING HEADERS & FOOTERS (ACROSS ALL PAGES)
     ===================================================================== */
  const totalPages = (doc as any).internal.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Running Header (Pages 2+)
    if (i > 1) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(slateText[0], slateText[1], slateText[2]);
      doc.text('EMMANUEL THOMAS ATAKOS  |  SOLAR PV & ENERGY STORAGE PROJECT DOSSIER', margin, 9);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(emerald[0], emerald[1], emerald[2]);
      doc.text('EBK REG: B25236', pageWidth - margin - 25, 9);

      doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
      doc.setLineWidth(0.3);
      doc.line(margin, 11, pageWidth - margin, 11);
    }

    // Running Footer (All Pages)
    doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 9, pageWidth - margin, pageHeight - 9);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(slateText[0], slateText[1], slateText[2]);
    doc.text(
      'Emmanuel Thomas Atakos — EBK Reg: B25236 | EPRA Class T3 Solar PV License',
      margin,
      pageHeight - 5.5
    );

    const pageStr = `Page ${i} of ${totalPages}`;
    doc.setFont('helvetica', 'bold');
    doc.text(pageStr, pageWidth - margin - doc.getTextWidth(pageStr), pageHeight - 5.5);
  }

  return doc;
}

/**
 * Convenience helper to generate and trigger instant browser download.
 */
export function downloadExperienceReport(
  projects: ProjectItem[] = projectsData,
  profile: ProfileData = profileData,
  filename = 'Emmanuel_Atakos_Project_Experience_Report.pdf'
): void {
  const doc = generateExperienceReport(projects, profile);
  doc.save(filename);
}
