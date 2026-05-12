import "../styles/Home.css";

export default function Home() {
    return (
        <section id="home">
            <div className="container home-container">
                <div className="home-content d-flex flex-column align-items-center justify-content-center text-center ">
                    <h4 className="tag-content">2025 - 2026</h4>
                    <h1 className="header">LAPORAN PRAKTIK KERJA LAPANGAN</h1>
                    <h1 className="header-content">3PM SOLUTION</h1>
                    <h3 className="text">XI RPL D - REKAYASA PERANGKAT LUNAK</h3>
                    <h3 className="text-content">SMK NEGERI 8 MALANG</h3>

                    <div className="button-group">
                        <a href="#profile" className="btn btn-primary">Read More</a>
                        <a href="#pendahuluan" className="btn btn-secondary">Unduh Laporan</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
