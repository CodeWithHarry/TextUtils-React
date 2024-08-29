import React from 'react';

export default function About(props) {
    // Define a more aesthetic color scheme for dark and light modes
    const myStyle = {
        color: props.mode === 'dark' ? '#DCE3F2' : '#1F2937', // Lighter text for dark mode, darker for light mode
        backgroundColor: props.mode === 'dark' ? '#1C2234' : '#FFFFFF', // Darker background for dark mode, white for light mode
        borderColor: props.mode === 'dark' ? '#495579' : '#E5E7EB', // Subtle border based on mode
        borderRadius: '8px', // Rounded corners for buttons and accordion items
        padding: '15px', // Padding for content areas
    };

	const containerStyle = {
		backgroundColor: props.mode === 'dark' ? '#2D2E32' : '#F0F4F8',
        color: props.mode === 'dark' ? '#F0F4F8' : '#2D2E32',
        padding: '20px',
        borderRadius: '8px',
		maxWidth: '800px', // Maximum width of the container
		margin: '0 auto', // Center the container horizontally
	};
	

    const buttonStyle = {
        color: props.mode === 'dark' ? '#DCE3F2' : '#1F2937',
        backgroundColor: props.mode === 'dark' ? '#2A2E3D' : '#F9FAFB',
        borderColor: props.mode === 'dark' ? '#495579' : '#E5E7EB',
        borderRadius: '8px',
    };

    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            style={buttonStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style={buttonStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. It is suitable for writing text with word/character limits.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            style={buttonStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, and Opera. It suits counting characters in various platforms like Facebook, blogs, books, Excel documents, PDFs, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
