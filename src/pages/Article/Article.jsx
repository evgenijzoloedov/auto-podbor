import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {ArticleBlock} from "../../components/articleBlock";
import {BlogArticles} from "../../components/blogArticles";
import {getBlogPost, getBlogPosts} from "../../api/blogAPI";
import {PaginationComponent} from "../../components/UI/pagination/Pagination";
import blackArticleRec from '../../assets/images/waves/blackArticleRec.png'
import {FormBlock} from "../../components/FormBlock";
import {WaveWrapper} from "../../components/wavesWrapper";
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";

export const Article = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [currentPost, setCurrentPost] = useState()
    const [page, setPage] = useState(1)

    const [posts, setPosts] = useState()
    useEffect(() => {
        (async () => {
            await getBlogPost(id).then(setCurrentPost).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])
    useEffect(() => {
        (async () => {
            await getBlogPosts(page, 3).then(setPosts).catch(() => {
                nav("/not-found");
            })
        })()
    }, [page])
    return (
        <BreadcrumbsLayout text={currentPost?.title || ""}>
            <main>
                <ArticleBlock post={currentPost}/>
                {
                    posts?.results.length && <div style={{padding: "0 0 100px 0"}}>
                        <BlogArticles posts={posts.results} style={{flexWrap: "nowrap"}}/>
                        <PaginationComponent pageCount={posts.page_count} setPage={setPage}/>
                    </div>
                }
                <WaveWrapper src={blackArticleRec} alt={"blackArticleRec"}>
                    <FormBlock/>
                </WaveWrapper>

            </main>
        </BreadcrumbsLayout>
    );
};

