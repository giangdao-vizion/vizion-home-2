import Countdown from "@/components/elements/Countdown";
import Link from "next/link";
export default function Ico_Section2() {
    const currentTime = new Date();
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="block-grid layout-02">
                        <div className="grid-item background-navy background-full" style={{ backgroundImage: 'url(/assets/images/hi-02.png)' }}>
                            <h3 className="title">Our Private Sale Ends in</h3>
                            <div className="block-countdown color-white">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield fullfield-yellow" title="Join Our Private Sale">Join Our Private Sale</Link>
                            </div>
                        </div>
                        <div className="grid-item background-navy-2 background-full" style={{ backgroundImage: 'url(/assets/images/hi-02.png)' }}>
                            <h3 className="title">Whitepaper</h3>
                            <img src="/assets/images/hi-03.svg" alt="Image" />
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield fullfield-yellow" title="Download">Download</Link>
                            </div>
                        </div>
                        <div className="grid-item background-red background-full" style={{ backgroundImage: 'url(/assets/images/hi-02.png)' }}>
                            <h3 className="title">Airdrop</h3>
                            <img src="/assets/images/hi-04.svg" alt="Image" />
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield fullfield-yellow" title="Get It">Get It</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}