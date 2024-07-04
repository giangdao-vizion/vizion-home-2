import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image height={40} width={100} src={'/assets/images/vizion/logos/vz-logo-white.png'} />
        </Link>
      </div>
    </>
  );
}
