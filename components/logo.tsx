import Image from 'next/image';

export default function Logo() {
    return (
        <Image src="/img/default-user.jpg" alt='logo' width={40} height={40}/>
    )
}