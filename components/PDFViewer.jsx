import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PDFViewer.css';

// Set the worker source for the PDF.js library
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);

  // Handle document loading
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  // Navigation functions
  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  // Zoom functions
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.5));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  // Reset zoom
  const resetZoom = () => {
    setScale(1.0);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
          goToNextPage();
          break;
        case 'ArrowLeft':
          goToPrevPage();
          break;
        case 'Escape':
          onClose();
          break;
        case '+':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageNumber, numPages, onClose]);

  return (
    <div className="pdf-viewer-overlay">
      <div className="pdf-viewer-container">
        <div className="pdf-viewer-header">
          <h2>PDF Presentation Viewer</h2>
          <div className="pdf-viewer-controls">
            <button onClick={zoomOut} className="control-button">
              <i className="fas fa-search-minus"></i>
            </button>
            <button onClick={resetZoom} className="control-button">
              <i className="fas fa-expand"></i>
            </button>
            <button onClick={zoomIn} className="control-button">
              <i className="fas fa-search-plus"></i>
            </button>
            <button onClick={onClose} className="close-button">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="pdf-document-container">
          {loading && (
            <div className="loading-indicator">
              <div className="spinner"></div>
              <p>Loading PDF...</p>
            </div>
          )}
          
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error('Error loading PDF:', error)}
            loading={<div className="loading">Loading PDF...</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>

        <div className="pdf-navigation">
          <button 
            onClick={goToPrevPage} 
            disabled={pageNumber <= 1}
            className="nav-button"
          >
            <i className="fas fa-chevron-left"></i> Previous
          </button>
          
          <p className="page-indicator">
            Page {pageNumber} of {numPages}
          </p>
          
          <button 
            onClick={goToNextPage} 
            disabled={pageNumber >= numPages}
            className="nav-button"
          >
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="pdf-keyboard-shortcuts">
          <p>Keyboard shortcuts: Arrow Left/Right to navigate, +/- to zoom, Esc to close</p>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;