import "../styles/Lampiran.css";
import "../styles/Laporan.css";
import ticat1 from "../assets/ticat1.jpeg";
import ticat2 from "../assets/ticat2.jpeg";
import ticat3 from "../assets/ticat3.jpeg";
import erp1 from "../assets/erp1.jpeg";
import erp2 from "../assets/erp2.jpeg";
import erp3 from "../assets/erp3.jpeg";
import me1 from "../assets/me1.jpg";
import me2 from "../assets/me2.jpeg";
import kantor from "../assets/image.png";
import bukber from "../assets/bukber.jpeg";
import api from "../assets/api.jpeg";
import daftar from "../assets/daftar.jpeg"
import konsultasi1 from "../assets/konsultasi1.jpeg";
import konsultasi2 from "../assets/konsultasi2.jpeg";
import penjemputan from "../assets/penjemputan.jpeg";


export const LAMPIRAN_SECTION_ID = "lampiran";

const LAMPIRAN_ITEMS = [
    {
        title: "Form Edit/Tambah User",
        text: "Tampilan form untuk menambah atau mengedit data user.",
        image: ticat1,
    },
    {
        title: "Tabel List Daftar Equipment",
        text: "Menampilkan daftar equipment secara rapi dan terstruktur.",
        image: ticat2,
    },
    {
        title: "List Request",
        text: "Menampilkan daftar request pengaduan untuk memudahkan proses pengecekan.",
        image: ticat3,
    },
    {
        title: "Dokumentasi Pengerjaan TICAT",
        text: "Dokumentasi saat mengerjakan Website (TICAT) selama kegiatan PKL.",
        image: me1,
    },
    {
        title: "Kantor 3PM Solution",
        text: "Menampilkan suasana dan lingkungan tempat pelaksanaan PKL.",
        image: kantor,
    },
    {
        title: "Implementasi API",
        text: "Menunjukkan proses penerapan API pada pengembangan aplikasi.",
        image: api,
    },
    {
        title: "Buka Puasa Bersama",
        text: "Dokumentasi kegiatan kebersamaan bersama tim di lingkungan kerja.",
        image: bukber,
    },
    {
        title: "Tabel List",
        text: "Menampilkan data utama dalam bentuk tabel pada project yang dikerjakan.",
        image: erp1,
    },
    {
        title: "Form Edit/Tambah",
        text: "Form yang digunakan untuk menambah atau memperbarui data.",
        image: erp2,
    },
    {
        title: "Setting Payroll",
        text: "Menampilkan bagian pengaturan payroll pada sistem yang dikerjakan.",
        image: erp3,
    },
    {
        title: "Dokumentasi Pengerjaan ERP",
        text: "Dokumentasi saat mengerjakan project ERP selama PKL berlangsung.",
        image: me2,
    },
    {
        title: "Daftar Pekerjaan",
        text: "Berisi daftar pekerjaan yang dikerjakan selama kegiatan PKL.",
        image: daftar,
    },
    {
        title: "Konsultasi Google Site Day 1",
        text: "Dokumentasi konsultasi pertama dengan guru pembimbing.",
        image: konsultasi1,
    },
    {
        title: "Konsultasi Google Site Day 2",
        text: "Dokumentasi konsultasi kedua dengan guru pembimbing.",
        image: konsultasi2,
    },
    {
        title: "Penjemputan PKL di 3PM Solution",
        text: "Dokumentasi proses penjemputan peserta PKL.",
        image: penjemputan,
    }
];

export default function Lampiran() {
    return (
        <section id={LAMPIRAN_SECTION_ID} className="lampiran-section" data-aos="fade-up">
            <div className="container lampiran-shell">
                <div className="lampiran-header">
                    <h2 className="lampiran-title">Lampiran</h2>
                    <p className="lampiran-description">
                        Bagian ini berisi dokumentasi tambahan sebagai pelengkap laporan kegiatan PKL.
                    </p>
                </div>

                <div className="lampiran-panel">
                    <div className="laporan-content">
                        <section className="laporan-project">
                            <div className="laporan-project__gallery">
                                {LAMPIRAN_ITEMS.map((item, index) => (
                                    <article key={`${item.title}-${index}`} className="laporan-image" data-aos="fade-in" data-aos-duration="600">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
