import "../styles/Profile.css";
import fotoSiswa from "../assets/me-optimized.jpg";
import fotoIndustri from "../assets/image-optimized.jpg";
import logoIndustri from "../assets/3pm.jpg";
export const PROFILE_SECTION_ID = "profile";
export const DEFAULT_PROFILE_TAB = "siswa";

const BIODATA_SISWA = [
    ["Nama Lengkap", "Fitri Rachmania Harianto"],
    ["Tempat, Tgl Lahir", "Malang, 29 Maret 2008"],
    ["Alamat", "Perum Pondok Mutiara Blok E2/20 Dengkol, Singosari, Malang"],
    ["Jenis Kelamin", "Perempuan"],
    ["Jurusan", "Rekayasa Perangkat Lunak"],
    ["NIS", "5704/1384.63"],
    ["Kelas", "XI RPL D"],
    ["No. Telepon", "+62 823-3071-7123"],
    ["Email", "fitrirachmania29@gmail.com"],
    ["Sekolah", "SMK Negeri 8 Malang"],

];

const PROFIL_INDUSTRI = [
    ["Nama Industri", "3PM Solution"],
    ["Bidang", "Software House / Teknologi Informasi"],
    ["Lokasi", "Jl. Lkr. Blimbing Indah No.47, Pandanwangi, Kec. Blimbing, Kota Malang, Jawa Timur 65126"],
    ["No. Telepon", "+62 856-3432-003"],
    ["Email", "hrd3pmsolution@gmail.com"],
    ["Website", "https://tr.ee/EYxpgKjDBO"],
];

const MISI_PERUSAHAAN = [
    "Mengembangkan aplikasi yang bermanfaat untuk mendukung kebutuhan dan kinerja pengguna.",
    "Membangun sumber daya manusia yang kreatif, profesional, dan dapat diandalkan.",
];

function ProfileSiswaTab() {
    return (
        <div className="profile-tab-content">
            <div className="profile-grid" data-aos="fade-up">
                <section className="image-siswa" data-aos="zoom-in" data-aos-duration="600">
                    <img
                        src={fotoSiswa}
                        alt="Foto Siswa"
                        className="profile-image-siswa"
                        width="960"
                        height="1707"
                        loading="lazy"
                        decoding="async"
                    />
                </section>
                <section className="profile-card" data-aos="zoom-in" data-aos-duration="600">
                    <h3 className="profile-card__title">Profile Siswa</h3>
                    <div className="profile-table">
                        {BIODATA_SISWA.map(([label, value]) => (
                            <div key={label} className="profile-table__row">
                                <span className="profile-table__label">{label}</span>
                                <span className="profile-table__separator">:</span>
                                <span className="profile-table__value">{value}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function ProfileIndustriTab() {
    return (
        <div className="profile-tab-content">
            <div className="profile-grid" data-aos="fade-up">
                <section className="image-siswa" data-aos="zoom-in" data-aos-duration="600">
                    <img
                        src={fotoIndustri}
                        alt="Foto Industri"
                        className="profile-image-siswa"
                        width="960"
                        height="625"
                        loading="lazy"
                        decoding="async"
                    />
                </section>
                <section className="profile-card" data-aos="zoom-in" data-aos-duration="600">
                    <h3 className="profile-card__title">Profile Industri</h3>
                    <div className="profile-table">
                        {PROFIL_INDUSTRI.map(([label, value]) => (
                            <div key={label} className="profile-table__row">
                                <span className="profile-table__label">{label}</span>
                                <span className="profile-table__separator">:</span>
                                <span className="profile-table__value">{value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="profile-card" data-aos="zoom-in" data-aos-duration="600">
                    <h3 className="profile-card__title">Deskripsi Singkat</h3>
                    <p className="profile-copy">
                        3PM Solution Software House didirikan pada tahun 2009 oleh Ricky Subiantoputra, S.Kom
                        dan bergerak di bidang pengembangan aplikasi dan layanan teknologi digital.
                        industri ini menyediakan layanan pengembangan aplikasi desktop, web, dan mobile untuk
                        berbagai kebutuhan industri.
                    </p>
                    <br></br>
                    <h3 className="profile-card__title">Misi Industri</h3>
                    <ul className="profile-list">
                        {MISI_PERUSAHAAN.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section className="image-siswa" data-aos="zoom-in" data-aos-duration="600">
                    <img
                        src={logoIndustri}
                        alt="Logo Industri"
                        className="profile-image-siswa"
                        width="960"
                        height="625"
                        loading="lazy"
                        decoding="async"
                    />
                </section>
            </div>

            <section className="profile-card" data-aos="fade-up">
                <h3 className="profile-card__struktur">Struktur Industri</h3>
                <div className="organization-section">

                    <div className="org-level top">
                        <div className="org-card leader">
                            <div className="org-avatar">R</div>
                            <div>
                                <h3>Ricky</h3>
                                <p>Owner</p>
                            </div>
                        </div>
                    </div>

                    <div className="org-line vertical"></div>

                    <div className="org-line horizontal"></div>

                    <div className="org-level">

                        <div className="org-card">
                            <div className="org-avatar">L</div>
                            <div>
                                <h3>Latief</h3>
                                <p>Programmer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">M</div>
                            <div>
                                <h3>Miko</h3>
                                <p>Developer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">I</div>
                            <div>
                                <h3>Indri</h3>
                                <p>System Analyst</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">P</div>
                            <div>
                                <h3>Putri</h3>
                                <p>Programmer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">I</div>
                            <div>
                                <h3>Ilham</h3>
                                <p>Programmer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">R</div>
                            <div>
                                <h3>Rafly</h3>
                                <p>Programmer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">J</div>
                            <div>
                                <h3>Jia</h3>
                                <p>UI Designer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">A</div>
                            <div>
                                <h3>Alfi</h3>
                                <p>Illustrator</p>
                            </div>
                        </div>


                        <div className="org-card">
                            <div className="org-avatar">R</div>
                            <div>
                                <h3>Rony</h3>
                                <p>Programmer</p>
                            </div>
                        </div>

                        <div className="org-card">
                            <div className="org-avatar">H</div>
                            <div>
                                <h3>Hesa</h3>
                                <p>Designer</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="profile-card" data-aos="fade-up">
                <h3 className="profile-card__title">Lokasi Industri</h3>
                <div className="profile-map">
                    <iframe
                        src="https://maps.google.com/maps?q=3PM%20Solution%20Malang&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        className="profile-map__frame"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi 3PM Solution"
                    />
                </div>
            </section>
        </div>
    );
}

const PROFILE_TABS = [
    {
        id: "siswa",
        label: "Profile Siswa",
        component: ProfileSiswaTab,
    },
    {
        id: "industri",
        label: "Profile Industri",
        component: ProfileIndustriTab,
    },
];

export default function Profile({ activeTab, onTabChange }) {
    const currentTab = PROFILE_TABS.find((tab) => tab.id === activeTab) ?? PROFILE_TABS[0];
    const ActiveComponent = currentTab.component;

    return (
        <section id={PROFILE_SECTION_ID} className="profile-section" data-aos="fade-up">
            <div className="container profile-shell">
                <div className="profile-header">
                    <h2 className="profile-title">Profile</h2>
                    <p className="profile-description">
                        Menampilkan informasi mengenai siswa PKL serta profil industri tempat pelaksanaan PKL berlangsung.
                    </p>

                    <div className="profile-tabs">
                        {PROFILE_TABS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`profile-tab ${currentTab.id === tab.id ? "is-active" : ""}`}
                                type="button"
                                onClick={() => onTabChange(PROFILE_SECTION_ID, tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="profile-panel" key={activeTab}>
                    <ActiveComponent />
                </div>
            </div>
        </section>
    );
}
