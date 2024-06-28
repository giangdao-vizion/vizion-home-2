import Layout from "@/components/layout/Layout";
import Link from "next/link";
import dynamic from 'next/dynamic';
const BlogMasonaryComp = dynamic(() => import('@/components/elements/BlogMasonary'), {
    ssr: false,
})
export default function BlogBoxedMasonary() {
    return (
        <>
            <Layout pageTitle="Masonary  Layout" pageTitleDesc="Share your stories and news with everyone.">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <BlogMasonaryComp blogStyle="style-boxed" />
                            <div className="pagination align-center">
                                <div className="inner">
                                    <Link href="/" title="Prev" className="prev"><i className="las la-long-arrow-alt-left" />Prev</Link>
                                    <span>1</span>
                                    <Link href="/" title={2} className="number">2</Link>
                                    <Link href="/" title="Next" className="next">Next<i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>


        </>
    )
}