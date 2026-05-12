import "../styles/Lampiran.css";
import "../styles/Laporan.css";
import ticat1 from "../assets/ticat1.jpeg";
import ticat2 from "../assets/ticat2.jpeg";
import ticat3 from "../assets/ticat3.jpeg";

export const LAMPIRAN_SECTION_ID = "lampiran";

const LAMPIRAN_ITEMS = [
    {
        title: "Kegiatan PKL 01",
        text: "Dokumentasi kegiatan selama proses Praktik Kerja Lapangan berlangsung.",
        image: ticat1,
    },
    {
        title: "Kegiatan PKL 02",
        text: "Lampiran ini menampilkan momen kegiatan dan proses pembelajaran selama PKL.",
        image: ticat2,
    },
    {
        title: "Kegiatan PKL 03",
        text: "Dokumentasi tambahan sebagai pelengkap laporan kegiatan PKL.",
        image: ticat3,
    },
];

export default function Lampiran() {
    return (
        <section id={LAMPIRAN_SECTION_ID} className="lampiran-section">
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
                                    <article key={`${item.title}-${index}`} className="laporan-image">
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
