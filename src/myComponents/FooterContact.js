import React from 'react'

export default function FooterContact() {
    return (
        <div className="bg-primary-overlay">
            <div className="container1 flex flex-col justify-around items-center py-28">
                <p className="contact-para-footer">
                    Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                    eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                    semper a diam.
                </p>
                <p className="contact-para-footer">021-34556899</p>
                <div className="contact-bottom-link">
                    <i className="fab fa-twitter p-4 bg-black text-white rounded-full"></i
                    ><i className="fab fa-facebook p-4 bg-black text-white rounded-full"></i
                    ><i className="fab fa-instagram p-4 bg-black text-white rounded-full"></i
                    ><i className="fab fa-youtube p-4 bg-black text-white rounded-full"></i>
                </div>
            </div>
        </div>
    );
}
