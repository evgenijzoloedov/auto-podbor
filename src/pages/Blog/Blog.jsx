import React, {useEffect, useState} from 'react';
import {BlogMain} from "../../components/blogMain";
import {useNavigate} from "react-router";
import {getBlogPosts} from "../../api/blogAPI";
import {BlogArticles} from "../../components/blogArticles";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import {FormBlock} from "../../components/FormBlock";
import blackBlogRec from "../../assets/images/waves/blackBlogRec.png";
import {BlackWrapper} from "../../components/blackWrapper";
import {WaveWrapper} from "../../components/wavesWrapper";
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";

export const Blog = () => {
    const nav = useNavigate()

    const [page, setPage] = useState(1)

    const [posts, setPosts] = useState()

    useEffect(() => {
        (async () => {
            await getBlogPosts(page,6).then(setPosts).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])

    return (
        <BreadcrumbsLayout text={"Блог"}>
            <main style={{margin: "0 auto"}}>
                <BlogMain/>

                <WaveWrapper src={blackBlogRec} alt={"blackBlogRec"}>
                    {
                        posts?.results.length && <div style={{paddingTop: "150px"}}>
                            <BlogArticles posts={posts.results}/>
                            <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                        </div>
                    }
                </WaveWrapper>

                <BlackWrapper>
                    <FormBlock/>
                </BlackWrapper>

            </main>
        </BreadcrumbsLayout>
    );
};

