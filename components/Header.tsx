import Link from "next/link";


export default function Header(){
    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link href="/" className="brand">
                Home Services
                </Link>

                <nav aria-label="Main navigation">
                    <ul className="nav-list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                         <li>
                            <Link href="/services/plumbing">Plumbing</Link>
                        </li>
                         <li>
                            <Link href="/services/electrical">Electrical</Link>
                        </li>
                         <li>
                            <Link href="/locations/chandigarh">Chandigarh</Link>
                        </li>
                         <li>
                            <Link href="/locations/chandigarh">Mohali</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}