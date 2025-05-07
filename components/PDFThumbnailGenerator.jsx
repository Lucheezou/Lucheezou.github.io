import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PDFThumbnailGenerator.css';

// Set the worker source for the PDF.js library
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFThumbnailGenerator = ({ pdfUrl, onThumbnailGenerated, width = 400 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // This effect will render the first page of the PDF as a thumbnail when loaded
  useEffect(() => {
    // We'll create a function to handle the thumbnail generation
    const generateThumbnail = async () => {
      try {
        // Load the PDF document
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        // Get the first page
        const page = await pdf.getPage(1);
        
        // Calculate scale to render at desired width while maintaining aspect ratio
        const viewport = page.getViewport({ scale: 1 });
        const scale = width / viewport.width;
        const scaledViewport = page.getViewport({ scale });
        
        // Create a canvas element to render the page
        const canvas = document.createElement("canvas");
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        const context = canvas.getContext("2d");
        
        // Render the page to the canvas
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };
        
        await page.render(renderContext).promise;
        
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL("image/jpeg", 1);
        
        // Call the callback with the generated thumbnail
        onThumbnailGenerated(dataUrl);
        setLoading(false);
      } catch (err) {
        console.error("Error generating thumbnail:", err);
        setError(err);
        setLoading(false);
      }
    };
    
    // Run the thumbnail generation
    generateThumbnail();
  }, [pdfUrl, width, onThumbnailGenerated]);
  
  return (
    <div className="pdf-thumbnail-generator">
      {loading && <div className="thumbnail-loading">Generating thumbnail...</div>}
      {error && <div className="thumbnail-error">Error generating thumbnail</div>}
    </div>
  );
};

export default PDFThumbnailGenerator;