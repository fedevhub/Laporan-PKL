import "../styles/Laporan.css";
import ticat1 from "../assets/ticat1.jpeg";
import ticat2 from "../assets/ticat2.jpeg";
import ticat3 from "../assets/ticat3.jpeg";
export const LAPORAN_SECTION_ID = "laporan";
export const DEFAULT_LAPORAN_TAB = "kompetensi";

const BAGI_SISWA = [
    "Sebaiknya lebih aktif dalam bertanya dan belajar selama PKL.",
    "Menjaga sikap, disiplin, dan tanggung jawab di tempat kerja.",
    "Memanfaatkan kesempatan PKL srbaik mungkin untuk menambah pengalaman.",
];

const BAGI_SEKOLAH = [
    "Sebaiknya sekolah lebih mempersiapkan siswa sebelum PKL. Terutama dari segi keterampilan dasar.",
    "Memberikan pembekalan yang lebih jelas tentang dunia kerja.",
    "Menambah kerja sama dengan lebih banyak perusahaan.",
];

const BAGI_PERUSAHAAN = [
    "Semoga perusahaan tetap memberikan arahan dan bimbingan yang jelas untuk siswa PKL.",
    "Bisa menambah tugas atau project sederhana agar siswa PKL bisa belajar lebih banyak.",
    "Tetap mempertahankan suasana kerja yang sudah nyaman.",
];

const KOMPETENSI_PROJECTS = [
    {
        id: "project-pemesanan",
        label: "Project 01",
        title: "Web Aplikasi Pemesanan Barang",
        description: [
            "Pada project ini, saya membantu mengerjakan web aplikasi pemesanan barang berbasis Angular yang terhubung dengan API. Tugas yang saya kerjakan meliputi pembuatan dan penyesuaian tampilan halaman, memperbaiki layout, serta membantu pengembangan fitur pada bagian front-end menggunakan HTML, CSS, Bootstrap, dan TypeScript.",
        ],
        stack: ["Angular", "TypeScript", "Bootstrap", "API Integration"],
        gallery: [
            {
                title: "Halaman Utama",
                text: "Tampilan utama disusun agar alur pemesanan barang lebih mudah dipahami pengguna.",
                image: ticat1,
            },
            {
                title: "Integrasi Data",
                text: "Komponen front-end dihubungkan dengan data API agar informasi produk dan pesanan tampil realtime.",
                image: ticat2,
            },
            {
                title: "Optimasi Layout",
                text: "Layout diperbaiki agar spacing, struktur, dan responsivitas halaman menjadi lebih rapi.",
                image: ticat3,
            },
        ],
    },
    {
        id: "project-gudang-lengkap",
        label: "Project 02",
        title: "Website Gudang Lengkap",
        description: [
            "Selain itu, saya juga membantu mengerjakan beberapa bagian website milik client perusahaan, yaitu Gudang Lengkap. Pada project ini, saya membuat beberapa bagian tampilan website menggunakan Angular, HTML, CSS, Tailwind CSS, dan TypeScript yang terhubung dengan API.",
            "Setiap bagian yang telah selesai dikerjakan akan diperiksa terlebih dahulu oleh Data Analyst. Setelah itu, saya melakukan revisi kembali sesuai masukan dan kebutuhan project hingga hasilnya sesuai dengan yang diinginkan.",
        ],
        stack: ["Angular", "HTML", "CSS", "Tailwind CSS", "API Integration"],
        gallery: [
            {
                title: "Dashboard Overview",
                text: "Ringkasan data utama dibuat lebih terstruktur supaya pengguna cepat memahami informasi penting.",
                image: ticat1,
            },
            {
                title: "Tabel dan Filter",
                text: "Bagian tabel, pencarian, dan filter dirapikan agar proses pengelolaan data lebih efisien.",
                image: ticat2,
            },
            {
                title: "Komponen Responsive",
                text: "Setiap komponen diuji kembali agar tetap nyaman dipakai pada berbagai ukuran layar.",
                image: ticat3,
            },
        ],
    },
];

function LaporanKompetensiTab() {
    return (
        <div className="laporan-content">
            <section className="laporan-card laporan-card--wide">
                <h3 className="laporan-card__title">Kompetensi yang Diterapkan</h3>
                <p className="laporan-copy">
                    Selama melaksanakan Praktik Kerja Lapangan (PKL) di 3PM Solution,
                    saya ditempatkan pada divisi Front-End Developer. Pada divisi ini,
                    saya membantu proses pengembangan tampilan website dan web aplikasi
                    yang sedang dikerjakan oleh perusahaan. Saya juga mempelajari bagaimana
                    alur pengerjaan project di lingkungan software house, mulai dari proses
                    pengembangan fitur, integrasi API, revisi tampilan, hingga penyesuaian
                    kebutuhan client.

                    Dalam pengerjaan project, saya menggunakan beberapa teknologi seperti Angular,
                    TypeScript, HTML, CSS, Bootstrap, dan Tailwind CSS untuk membantu proses pengembangan
                    front-end aplikasi.
                </p>
            </section>

            {KOMPETENSI_PROJECTS.map((project) => (
                <section key={project.id} className="laporan-project">
                    <div className="laporan-project__intro">
                        <div className="laporan-project__meta">
                            <span className="laporan-project__label">{project.label}</span>
                            <div className="laporan-project__stack">
                                {project.stack.map((item) => (
                                    <span key={item} className="laporan-project__chip">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="laporan-card__title laporan-project__title">{project.title}</h3>
                    </div>

                    <div className="laporan-project__description">
                        {project.description.map((paragraph) => (
                            <p key={paragraph} className="laporan-copy">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="laporan-project__gallery">
                        {project.gallery.map((item, index) => (
                            <article key={`${project.id}-${index}`} className="laporan-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="laporan-image__asset"
                                    width="960"
                                    height="1707"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="laporan-image__body">
                                    <h4 className="laporan-image__title">{item.title}</h4>
                                    <p className="laporan-image__text">{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

function LaporanKesimpulanTab() {
    return (
        <div className="laporan-content">
            <div className="laporan-grid">
                <section className="laporan-card">
                    <h3 className="laporan-card__title">Kesimpulan</h3>
                    <p className="laporan-copy">
                        PKL di 3PM Solution memberikan banyak pengalaman dan pembelajaran baru bagi saya, 
                        khususnya di bidang front-end development dan dunia kerja IT. Selama kegiatan berlangsung, 
                        saya mempelajari proses pengembangan aplikasi, integrasi API, kerja sama tim, serta bagaimana
                        alur pengerjaan project di lingkungan software house. Pengalaman ini juga membantu saya 
                        meningkatkan kemampuan teknis maupun soft skill yang dapat menjadi bekal untuk ke depannya.
                    </p>
                </section>

                <section className="laporan-card">
                    <h3 className="laporan-card__title">Kesan</h3>
                    <p className="laporan-copy">
                        Selama menjalani PKL di 3PM Solution, saya merasa senang karena mendapatkan lingkungan kerja 
                        yang nyaman dan banyak pengalaman baru. Saya juga mendapatkan bimbingan dan arahan yang membantu 
                        saya lebih memahami pekerjaan serta proses kerja di dunia industri. Selain itu, suasana kerja 
                        yang baik membuat saya lebih mudah beradaptasi dan belajar selama kegiatan PKL berlangsung.
                    </p>
                </section>
            </div>

            <div className="pendahuluan-grid pendahuluan-grid--manfaat">
                <section className="pendahuluan-card">
                    <h3 className="pendahuluan-card__title">Saran Bagi Siswa</h3>
                    <ul className="pendahuluan-list">
                        {BAGI_SISWA.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="pendahuluan-card">
                    <h3 className="pendahuluan-card__title">Saran Bagi Sekolah</h3>
                    <ul className="pendahuluan-list">
                        {BAGI_SEKOLAH.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="pendahuluan-card">
                    <h3 className="pendahuluan-card__title">Saran Bagi Perusahaan</h3>
                    <ul className="pendahuluan-list">
                        {BAGI_PERUSAHAAN.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

const LAPORAN_TABS = [
    {
        id: "kompetensi",
        label: "Kompetensi",
        component: LaporanKompetensiTab,
    },
    {
        id: "kesimpulan",
        label: "Kesimpulan",
        component: LaporanKesimpulanTab,
    },
];

export default function Laporan({ activeTab, onTabChange }) {
    const currentTab = LAPORAN_TABS.find((tab) => tab.id === activeTab) ?? LAPORAN_TABS[0];
    const ActiveComponent = currentTab.component;

    return (
        <section id={LAPORAN_SECTION_ID} className="laporan-section">
            <div className="container laporan-shell">
                <div className="laporan-header">
                    <h2 className="laporan-title">Laporan</h2>
                    <p className="laporan-description">
                        Bagian ini merangkum kompetensi yang diterapkan selama PKL serta kesimpulan dari kegiatan yang telah dijalani.
                    </p>

                    <div className="laporan-tabs">
                        {LAPORAN_TABS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`laporan-tab ${currentTab.id === tab.id ? "is-active" : ""}`}
                                type="button"
                                onClick={() => onTabChange(LAPORAN_SECTION_ID, tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="laporan-panel">
                    <ActiveComponent />
                </div>
            </div>
        </section>
    );
}
