document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'resume_s.pdf';  // Link to the PDF file
    link.download = 'Resume.pdf';
    link.click();
});