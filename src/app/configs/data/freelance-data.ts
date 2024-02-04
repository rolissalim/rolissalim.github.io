import { timeFormat } from "@app/helpers/Time.helper";

export function freelanceData() {
    return [
        {
            name: "Outage PLN Kalimantan V2",
            alias: null,
            headline: true,
            program_language: "typescript,react js",
            framework: null,
            library: "Google Map, webpack, babel, eslint, react-router-dom, readux@toolkit, code-splitting, compores, optimitation",
            short_description: "Webiste ini digunakan untuk keperluan di PLN Kalimantan",
            description: "Webiste ini digunakan untuk keperluan di PLN Kalimantan",
            task: [
                "Role sebagai Leader dan Frontend",
                "Menentukan Alur Program sesuai kebutuhan user",
                "Menganalisis relasi table",
            ],
            company: "PT Quadran",
            period: timeFormat("2020-09", "MMM YYYY"),
            status: "Production",
            type:"freelance"
        },
        {
            name: "SIAP PLN Kalimantan ",
            alias: null,
            headline: false,
            program_language: "typescript,react js",
            framework: null,
            library: "Google Map, webpack, babel, eslint, react-router-dom, readux@toolkit, code-splitting, compores, optimitation",
            short_description: "Website ini digunakan untuk management keluar masuknya barang dari gudang",
            description: "Website ini digunakan untuk management keluar masuknya barang dari gudang",
            task: [
                "Role sebagai Leader dan Frontend",
                "Menentukan Alur Program sesuai kebutuhan user",
                "Menganalisis relasi table",
            ],
            company: "PT Quadran",
            status: "Production",
            period: timeFormat("2020-09", "MMM YYYY"),
            images: [
                "/static/siap/dashboard.png"
            ],
            type:"freelance"
        },
        {
            name: "Info PDM PLN Kalimantan V2",
            alias: null,
            headline: false,
            program_language: "typescript, react js",
            framework: null,
            library: "Google Map, webpack, babel, eslint, react-router-dom, readux@toolkit, code-splitting, compores, optimitation",
            short_description: "Website ini digunakan untuk management perawatan yang ada dilapangan, seperti gardu dan lain-lain ",
            description: "Website ini digunakan untuk management perawatan yang ada dilapangan, seperti gardu dan lain-lain",
            task: [
                "Role sebagai Leader",
                "Menentukan Alur Program sesuai kebutuhan user",
                "Menganalisis relasi table",
            ],
            company: "PT Quadran",
            status: "Production",
            period: timeFormat("2020-09", "MMM YYYY"),
            images: [
                "/static/info-pdm/dashboard.png"
            ],
            type:"freelance"
        },
        {
            name: "SI-KEREN DPPKB Bandung",
            alias: null,
            headline: true,
            program_language: "PHP",
            framework: "Laravel 8",
            library: null,
            short_description: "Aplikasi pelaporan penyuluhan KB dikota bandung",
            description: "Aplikasi pelaporan penyuluhan KB dikota bandung",
            task: [
                "Role sebagai Leader",
                "Menentukan Alur Program sesuai kebutuhan user",
                "Menganalisis relasi table",
                "Mengerjakan front end dan sebagian Rest API",

            ],
            company: "PT Quadran",
            period: "2020",
            images: [
                "/static/si-keren/home.png"
            ],
            status: "Production",
            type:"freelance"
        },
        {
            name: "Sistem Informasi di PLN Kalimantan",
            alias: null,
            headline: true,
            program_language: "PHP",
            framework: "code igniter 2",
            library: "Google Map, highchart, datatable, jqwidget",
            short_description: "",
            description: "",
            task: ["Sebagai fullstcak","menganalisis kebutuhan user"],
            company: "PT Quadran",
            period: "2018",
            images: [
                "/static/uikl/home.png"
            ],
            status: "Production",
            type:"freelance"
        },
        {
            name: "Rest API GO TRANS",
            alias: null,
            headline: true,
            program_language: "PHP",
            framework: "Phalcon",
            library: "Phalcon",
            short_description: "Rest API sudah ada hanya upgrade dari versi framework phalcon",
            description: "Rest API sudah ada hanya upgrade dari versi framework phalcon",
            task: ["upgrade phalcon ke versi terbaru "],
            company: null,
            period: "2016",
            images: [
                "/static/gotrans/home.png"
            ],
            status: "Production",
            type:"freelance"
        },
        {
            name: "Inventori Obat",
            alias: null,
            headline: false,
            program_language: "PHP",
            framework: null,
            library: "jQuery,Bootstrap",
            short_description: "Aplikasi ini dibuat untuk menentukan pengendalian dan perencanaan obat di Dinas Kesehatan Kota Bandung",
            description:
                `Aplikasi ini implementasi metode Singel Moving Avaragge untuk mengetahui jumlah kebutuhan obat 
            dan metode Economic Quantity Order untuk menentukan jumlah obat yang harus dipesan.
            Aplikasi digunakan untuk kebutuhan skripsi`,
            task: [
                "Analisis kasus",
                "Membuat UI/UX",
                "Menentukan alur program",
                "Membuat crud data yang dibutuhkan",
                "Implementasi metode Analytical Hierarchy Proses dalam menentukan potensial aset ",
                "Bugfix"
            ],
            company: "PT. KAI DAOP 2 Bandung",
            period: timeFormat("2013-06", "MMM YYYY"),
            images: [
                "/static/inventory-obat/data-obat.png"
            ],
            status: "Production",
            type:"freelance"
        },
        {
            name: "GIS Potensial Aset",
            alias: null,
            headline: false,
            program_language: "PHP",
            framework: null,
            library: "jQuery,Bootstrap",
            short_description: "Aplikasi ini dibuat untuk menentukan potensial dari aset PT. KAI DAOP 2 Bandung.",
            description: "Aplikasi ini implementasi metode Analytical Hierarchy Proses dalam menentukan petensial dari aset yang ada di PT. KAI DAOP 2 Bandung. Aplikasi digunakan untuk kebutuhan skripsi",
            task: [
                "Analisis kasus",
                "membuat UI/UX",
                "Menentukan alur program",
                "Membuat crud data yang dibutuhkan",
                "Implementasi metode Analytical Hierarchy Proses dalam menentukan potensial aset ",
                "Bugfix"
            ],
            company: "PT. KAI DAOP 2 Bandung",
            period: timeFormat("2013-06", "MMM YYYY"),

            images: null,
            status: "Production",
            type:"freelance"
        },
        {
            name: "Sistem Penjadwalan Kursus",
            alias: null,
            headline: false,
            program_language: "PHP",
            framework: "Code Igniter",
            library: "jQuery, Bootstrap",
            short_description: "Aplikasi ini dibuat untuk implementasi penjadwalan pada tempat kursus secara otomatis.",
            description: "Aplikasi ini implementasi metode algoritma dan tabu dalam penjadwalan salah satu tempat kurus secara otomatis. Aplikasi digunakan untuk kebutuhan skripsi",
            task: [
                "Pengerjaan penjadwalan dengan menggunakan metode algoritma dan tabu",
                "bugfix"
            ],
            company: null,
            period: "2012",
            images: [
                "/static/penjadwalan/jadwal.png"
            ],
            status: "Production",
            type:"freelance"
        }
    ]
}