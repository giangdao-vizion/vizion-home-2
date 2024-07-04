import Image from 'next/image';
import Link from 'next/link';

const COLOR_LOGO = '/assets/images/vizion/logos/vizion-logo.webp';
const WHITE_LOGO = '/assets/images/vizion/logos/vz-logo-white.png';

export default function Logo({ isTop }) {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image height={40} width={100} src={isTop ? WHITE_LOGO : COLOR_LOGO} />
        </Link>
      </div>
    </>
  );
}
