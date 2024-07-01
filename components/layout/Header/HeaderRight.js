import Link from "next/link";

export default function HeaderRight() {
  return (
    <>
      <div className="header-right flex flex-align-c flex-content-e">
        {/* <div className="customer">
          <Link href="/sign-in">
            <i className="las la-user-circle" />
            <span>Log In</span>
          </Link>
        </div>
        <div className="buttons">
          <Link href="/contact-01" className="button fullfield">
            <i className="las la-headset" />
            <span>Let's Talk</span>
          </Link>
        </div> */}

        <img src="/assets/images/awards-v3.png" alt="vizion-achivements" />
      </div>
    </>
  );
}
