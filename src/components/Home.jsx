import "../styles/Home.css";

export default function Home({ onNavigate }) {
    return (
        <section id="home" data-aos="fade-up"
            data-aos-duration="1500"> 
            <div className="container home-container">
                <div className="home-content d-flex flex-column align-items-center justify-content-center text-center ">
                    <h4 className="tag-content">2025 - 2026</h4>
                    <h1 className="header">LAPORAN PRAKTIK KERJA LAPANGAN</h1>
                    <h1 className="header-content">3PM SOLUTION</h1>
                    <h3 className="text">XI RPL D - REKAYASA PERANGKAT LUNAK</h3>
                    <h3 className="text-content">SMK NEGERI 8 MALANG</h3>

                    <div className="button-group">
                        <button type="button" className="btn btn-primary" onClick={() => onNavigate("profile")}>Read More</button>
                        <a href="https://drive.google.com/drive/folders/1fE2XgCD_0hwd1_3el3OzCCD8if_ohZ_K?usp=sharing" className="btn btn-secondary">View Proposal</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
