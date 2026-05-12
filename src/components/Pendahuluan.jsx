import "../styles/Pendahuluan.css";

export const PENDAHULUAN_SECTION_ID = "pendahuluan";
export const DEFAULT_PENDAHULUAN_TAB = "tujuan";

const TUJUAN_KHUSUS = [
    "Menambah wawasan tentang dunia kerja dan pengembangan aplikasi.",
    "Melatih kemampuan bekerja secara mandiri maupun dalam tim.",
    "Membiasakan diri untuk lebih disiplin dan bertanggung jawab di lingkungan kerja.",
    "Memahami alur pengerjaan project dan komunikasi dalam perusahaan.",
    "Menjadikan pengalaman PKL sebagai bekal sebelum masuk dunia kerja.",
];

const BAGI_SISWA = [
    "Menjadi lebih paham situasi kerja yang sebenarnya, tidak hanya teori.",
    "Melatih cara menghadapi masalah secara langsung di lingkungan kerja.",
    "Membantu mengenali kelebihan dan kekurangan diri saat bekerja.",
    "Membiasakan diri dengan ritme kerja yang terstruktur dan target.",
    "Menambahkan pengalaman yang bisa dijadikan nilai tambah saat melamar kerja.",
];

const BAGI_SEKOLAH = [
    "Mendapat gambaran nyata tentang perkembangan dunia industri.",
    "Menjadi acuan untuk menyesuaikan metode pembelajaran agar lebih relevan.",
    "Memperkuat hubungan kerja sama dengan perusahaan tempat PKL.",
    "Menjadi bahan pertimbangan dalam peningkatan kualitas pendidikan.",
    "Mendukung terciptanya lingkungan belajar yang lebih aplikatif.",
];

const BAGI_PERUSAHAAN = [
    "Mendapat sudut pandang baru dari siswa yang masih fresh.",
    "Membantu meringankan beberapa pekerjaan sederhana di perusahaan.",
    "Menjadi bagian dari kontribusi sosial perusahaan di bidang pendidikan.",
    "Memperkenalkan lingkungan kerja kepada generasi muda.",
    "Membangun citra positif perusahaan di kalangan pelajar dan sekolah.",
];

function PendahuluanTujuanTab() {
    return (
        <div className="pendahuluan-content">
            <div className="pendahuluan-grid pendahuluan-grid--tujuan">
                <section className="pendahuluan-card pendahuluan-card--wide pendahuluan-card--centered">
                    <h3 className="pendahuluan-card__title">Tujuan Umum</h3>
                    <p className="pendahuluan-copy">
                        Praktik Kerja Lapangan (PKL) bertujuan untuk memberikan pengalaman langsung kepada siswa
                        mengenai dunia kerja dan lingkungan industri yang sebenarnya. Melalui kegiatan ini, siswa
                        dapat memahami bagaimana ilmu yang dipelajari di sekolah diterapkan dalam pekerjaan sehari-hari
                        serta mengenal budaya kerja yang profesional.
                    </p>
                </section>

                <section className="pendahuluan-card pendahuluan-card--wide">
                    <h3 className="pendahuluan-card__title">Tujuan Khusus</h3>
                    <ul className="pendahuluan-list">
                        {TUJUAN_KHUSUS.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

function PendahuluanManfaatTab() {
    return (
        <div className="pendahuluan-content">
            <div className="pendahuluan-grid pendahuluan-grid--manfaat">
                <section className="pendahuluan-card">
                    <h3 className="pendahuluan-card__title">Bagi Siswa</h3>
                    <ul className="pendahuluan-list">
                        {BAGI_SISWA.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="pendahuluan-card">
                    <h3 className="pendahuluan-card__title">Bagi Sekolah</h3>
                    <ul className="pendahuluan-list">
                        {BAGI_SEKOLAH.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="pendahuluan-card">
                    <h3 className="pendahuluan-card__title">Bagi Perusahaan</h3>
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

const PENDAHULUAN_TABS = [
    {
        id: "tujuan",
        label: "Tujuan",
        component: PendahuluanTujuanTab,
    },
    {
        id: "manfaat",
        label: "Manfaat",
        component: PendahuluanManfaatTab,
    },
];

export default function Pendahuluan({ activeTab, onTabChange }) {
    const currentTab = PENDAHULUAN_TABS.find((tab) => tab.id === activeTab) ?? PENDAHULUAN_TABS[0];
    const ActiveComponent = currentTab.component;

    return (
        <section id={PENDAHULUAN_SECTION_ID} className="pendahuluan-section">
            <div className="container pendahuluan-shell">
                <div className="pendahuluan-header">
                    <h2 className="pendahuluan-title">Pendahuluan</h2>
                    <p className="pendahuluan-description">
                        Bagian ini berisi latar belakang serta tujuan pelaksanaan Praktik Kerja Lapangan.
                    </p>

                    <div className="pendahuluan-tabs">
                        {PENDAHULUAN_TABS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`pendahuluan-tab ${currentTab.id === tab.id ? "is-active" : ""}`}
                                type="button"
                                onClick={() => onTabChange(PENDAHULUAN_SECTION_ID, tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pendahuluan-panel">
                    <ActiveComponent />
                </div>
            </div>
        </section>
    );
}
