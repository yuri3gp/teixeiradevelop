import {Routes, Route } from "react-router-dom";
import NoPage from "../pages/NoPage";
import Home from '../pages/Home';
import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfUse from '../pages/TermsOfUse';

export default function PageRoutes() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/home" index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="termos-de-uso" element={<TermsOfUse />} />
                    <Route path="terms-of-use" element={<TermsOfUse />} />
                </Route>
            </Routes>
        </>
    )
}