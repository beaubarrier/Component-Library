import React, { useState } from 'react';
import Navbar from '../components/Navbar.js'
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';

// This will create a way to switch components on a page.
export default function Main() {
    const [currentPage, setPage] = useState('default')

    const renderPage = () => {
        if (currentPage === 'Page1') {
            return <Page1 />;
        }
        if (currentPage === 'Page2') {
            return <Page2 />;
        }
        if (currentPage === 'Page3') {
            return <Page3 />;
        }
    }
    const handlePageChange = (page) => setPage(page);

    return (
        <div >
            <Navbar currentPage={ currentPage } handlePageChange={ handlePageChange } />

            { renderPage() }

            <Footer />
        </div>



    );

}

