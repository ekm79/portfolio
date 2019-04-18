import React from 'react';
import {Document, Page} from 'react-pdf';


class Resume extends React.Component {
    state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;
    return (
        <div>
        {/* <Document file={Pdf}
        onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
            </Document> */}
        </div>
    )
  }


}

export default Resume;