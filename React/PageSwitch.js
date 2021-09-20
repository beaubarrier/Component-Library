import React, { useState } from 'react';
import Navbar from '../components/Navbar.js'
import Portfolio from '../components/Page1';
import MyStory from '../components/Page2';
import Default from '../components/Page3';

// This will create a way to switch components on a page.
export default function Main() {
    const [currentPage, setPage] = useState('default')

    const renderPage = () => {
        if (currentPage === 'Page1') {
            return <Portfolio />;
        }
        if (currentPage === 'Page2') {
            return <MyStory />;
        }
        if (currentPage === 'Page3') {
            return <Default />;
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

