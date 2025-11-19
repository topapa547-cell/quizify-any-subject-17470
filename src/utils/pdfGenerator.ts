import jsPDF from 'jspdf';

export interface LongQuestion {
  id: string;
  subject: string;
  class_level: number;
  question_text: string;
  question_text_english?: string;
  answer_text: string;
  answer_text_english?: string;
  marks: number;
  chapter?: string;
  difficulty: string;
}

export const generateLongQuestionPDF = (questions: LongQuestion[], language: 'hindi' | 'english') => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Add header
  doc.setFontSize(16);
  doc.text(language === 'hindi' ? 'लंबे उत्तर वाले प्रश्न' : 'Long Answer Questions', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  questions.forEach((question, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    // Question number and marks
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    const questionHeader = `${language === 'hindi' ? 'प्रश्न' : 'Question'} ${index + 1} (${question.marks} ${language === 'hindi' ? 'अंक' : 'marks'})`;
    doc.text(questionHeader, margin, yPosition);
    yPosition += 8;

    // Subject and class
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const metadata = `${language === 'hindi' ? 'विषय' : 'Subject'}: ${question.subject} | ${language === 'hindi' ? 'कक्षा' : 'Class'}: ${question.class_level}`;
    doc.text(metadata, margin, yPosition);
    yPosition += 8;

    // Question text
    doc.setFontSize(11);
    const questionText = language === 'hindi' ? question.question_text : (question.question_text_english || question.question_text);
    const questionLines = doc.splitTextToSize(questionText, maxWidth);
    doc.text(questionLines, margin, yPosition);
    yPosition += questionLines.length * 6 + 5;

    // Answer
    doc.setFont('helvetica', 'bold');
    doc.text(language === 'hindi' ? 'उत्तर:' : 'Answer:', margin, yPosition);
    yPosition += 7;

    doc.setFont('helvetica', 'normal');
    const answerText = language === 'hindi' ? question.answer_text : (question.answer_text_english || question.answer_text);
    const answerLines = doc.splitTextToSize(answerText, maxWidth);
    
    // Check if answer fits on current page
    if (yPosition + answerLines.length * 6 > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
    
    doc.text(answerLines, margin, yPosition);
    yPosition += answerLines.length * 6 + 15;
  });

  // Add footer with date
  const date = new Date().toLocaleDateString(language === 'hindi' ? 'hi-IN' : 'en-US');
  doc.setFontSize(8);
  doc.text(`${language === 'hindi' ? 'तिथि' : 'Date'}: ${date}`, margin, pageHeight - 10);

  return doc;
};

export const downloadPDF = (doc: jsPDF, filename: string) => {
  doc.save(`${filename}.pdf`);
};
