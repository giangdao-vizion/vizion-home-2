import Layout from "@/components/layout/Layout";
import Book_Section1 from "@/components/sections/homepage/Book/Book_Section1";
import Book_Section2 from "@/components/sections/homepage/Book/Book_Section2";
import Book_Section3 from "@/components/sections/homepage/Book/Book_Section3";
import Book_Section4 from "@/components/sections/homepage/Book/Book_Section4";
import Book_Section5 from "@/components/sections/homepage/Book/Book_Section5";
import Book_Section6 from "@/components/sections/homepage/Book/Book_Section6";
import Book_Section7 from "@/components/sections/homepage/Book/Book_Section7";
import Book_Section8 from "@/components/sections/homepage/Book/Book_Section8";

export default function HomeBook() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0 overflow-hidden">
                <Book_Section1 />
                <Book_Section2 />
                <Book_Section3 />
                <Book_Section4 />
                <Book_Section5 />
                <Book_Section6 />
                <Book_Section7 />
                <Book_Section8 />
            </Layout>

        </>
    )
}
