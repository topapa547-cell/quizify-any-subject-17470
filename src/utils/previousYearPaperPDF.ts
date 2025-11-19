import jsPDF from 'jspdf';

interface PreviousYearPaper {
  id: string;
  class_level: number;
  subject: string;
  year: number;
  paper_type: string;
  term: string;
  board: string;
  paper_data: any;
  total_marks: number;
  duration_minutes: number;
}

export const generatePreviousYearPaperPDF = (
  paper: PreviousYearPaper,
  language: 'hindi' | 'english',
  includeAnswers: boolean = false
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 15) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Header with border
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  const headerText = language === 'hindi' 
    ? `${paper.board} बोर्ड परीक्षा ${paper.year}`
    : `${paper.board} Board Examination ${paper.year}`;
  doc.text(headerText, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 10;

  doc.setFontSize(14);
  const subjectText = `${paper.subject} - ${language === 'hindi' ? 'कक्षा' : 'Class'} ${paper.class_level}`;
  doc.text(subjectText, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 8;

  // Paper details
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const timeText = language === 'hindi' 
    ? `समय: ${paper.duration_minutes} मिनट`
    : `Time: ${paper.duration_minutes} minutes`;
  const marksText = language === 'hindi'
    ? `अधिकतम अंक: ${paper.total_marks}`
    : `Maximum Marks: ${paper.total_marks}`;
  
  doc.text(timeText, margin, yPosition);
  doc.text(marksText, pageWidth - margin, yPosition, { align: 'right' });
  yPosition += 8;

  // Horizontal line
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Instructions (if any)
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  const instructionText = language === 'hindi'
    ? 'सामान्य निर्देश: सभी प्रश्न अनिवार्य हैं। प्रत्येक प्रश्न के अंक उसके सामने दिए गए हैं।'
    : 'General Instructions: All questions are compulsory. Marks are indicated against each question.';
  const instructions = doc.splitTextToSize(instructionText, maxWidth);
  doc.text(instructions, margin, yPosition);
  yPosition += instructions.length * 5 + 10;

  // Process sections
  if (paper.paper_data && paper.paper_data.sections) {
    paper.paper_data.sections.forEach((section: any, sectionIndex: number) => {
      checkNewPage(20);

      // Section header
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      const sectionName = language === 'hindi' 
        ? section.section_name 
        : section.section_name_english || section.section_name;
      doc.text(sectionName, margin, yPosition);
      yPosition += 8;

      // Section marks
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const sectionMarksText = language === 'hindi'
        ? `[${section.section_marks} अंक]`
        : `[${section.section_marks} marks]`;
      doc.text(sectionMarksText, margin, yPosition);
      yPosition += 8;

      // Questions in this section
      if (section.questions && Array.isArray(section.questions)) {
        section.questions.forEach((question: any, qIndex: number) => {
          checkNewPage(15);

          // Question number and marks
          doc.setFont('helvetica', 'bold');
          const qNumber = `${language === 'hindi' ? 'प्रश्न' : 'Q'}${question.question_number || `${sectionIndex + 1}.${qIndex + 1}`}`;
          const qMarks = `[${question.marks} ${language === 'hindi' ? 'अंक' : 'marks'}]`;
          doc.text(`${qNumber} ${qMarks}`, margin, yPosition);
          yPosition += 6;

          // Question text
          doc.setFont('helvetica', 'normal');
          const questionText = language === 'hindi'
            ? question.question_text
            : question.question_text_english || question.question_text;
          const questionLines = doc.splitTextToSize(questionText, maxWidth - 5);
          
          // Check if question fits on page
          if (yPosition + questionLines.length * 5 > pageHeight - margin) {
            checkNewPage();
          }
          
          doc.text(questionLines, margin + 5, yPosition);
          yPosition += questionLines.length * 5 + 3;

          // Options (if MCQ)
          if (question.options && Array.isArray(question.options)) {
            question.options.forEach((option: string) => {
              checkNewPage(8);
              const optionLines = doc.splitTextToSize(option, maxWidth - 10);
              doc.text(optionLines, margin + 10, yPosition);
              yPosition += optionLines.length * 5 + 2;
            });
            yPosition += 3;
          }

          // Answer (if includeAnswers is true)
          if (includeAnswers && question.answer_text) {
            checkNewPage(10);
            doc.setFont('helvetica', 'bold');
            doc.text(language === 'hindi' ? 'उत्तर:' : 'Answer:', margin + 5, yPosition);
            yPosition += 6;

            doc.setFont('helvetica', 'normal');
            const answerText = language === 'hindi'
              ? question.answer_text
              : question.answer_text_english || question.answer_text;
            const answerLines = doc.splitTextToSize(answerText, maxWidth - 10);
            
            // Check if answer fits
            if (yPosition + answerLines.length * 5 > pageHeight - margin) {
              checkNewPage();
            }
            
            doc.text(answerLines, margin + 10, yPosition);
            yPosition += answerLines.length * 5 + 5;

            // Explanation (if available)
            if (question.explanation) {
              doc.setFont('helvetica', 'italic');
              const explanationText = language === 'hindi'
                ? question.explanation
                : question.explanation_english || question.explanation;
              const explLines = doc.splitTextToSize(explanationText, maxWidth - 10);
              
              if (yPosition + explLines.length * 5 > pageHeight - margin) {
                checkNewPage();
              }
              
              doc.text(explLines, margin + 10, yPosition);
              yPosition += explLines.length * 5 + 5;
            }
          }

          yPosition += 5;
        });
      }

      yPosition += 10; // Space between sections
    });
  }

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `${language === 'hindi' ? 'पृष्ठ' : 'Page'} ${i} ${language === 'hindi' ? 'का' : 'of'} ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  return doc;
};