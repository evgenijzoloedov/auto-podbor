import React from 'react';
import {Routes, Route} from 'react-router'
import {MainLayout} from "../layout/mainLayout";
import {Main} from "../pages/Main";
import {Service} from "../pages/Service";
import {About} from "../pages/About";
import {NotFound} from "../pages/404";
import {Blog} from "../pages/Blog";
import {Privacy} from "../pages/Privacy";
import {Article} from "../pages/Article/Article";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Main/>}/>
                <Route path="/service/:id" element={<Service/>}/>
                <Route path="/article/:id" element={<Article/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="*" element={<NotFound to={"not-found"}/>}/>
            </Route>
        </Routes>
    );
};


