import { timeFormat } from "@app/helpers/Time.helper";

export function freelanceData() {
    return [
        {
            name: "Outage PLN Kalimantan V2",
            alias: "",
            headline: false,
            program_language: "typescript,react js",
            framework: "",
            library: "Google Map, webpack, babel, eslint, react-router-dom, readux@toolkit, code-splitting, compores, optimitation",
            short_description: "",
            description: "",
            task: [
                "Role sebagai Leader",
                "menentukan Alur Program sesuai kebutuhan user",
                "menganalisis relasi table",
            ],
            company: "PT Quadran",
            period: timeFormat("2020-09", "MMMM YYYY"),
            status: "Production"
        },
        {
            name: "SIAP PLN Kalimantan ",
            alias: "",
            headline: false,
            program_language: "typescript,react js",
            framework: "",
            library: "Google Map, webpack, babel, eslint, react-router-dom, readux@toolkit, code-splitting, compores, optimitation",
            short_description: "",
            description: "",
            task: [
                "Role sebagai Leader",
                "menentukan Alur Program sesuai kebutuhan user",
                "menganalisis relasi table",
            ],
            company: "PT Quadran",
            status: "Production",
            period: timeFormat("2020-09", "MMMM YYYY"),
            images: [
                "/static/siap/dashboard.png"
            ],
        },
        {
            name: "Info PDM PLN Kalimantan V2",
            alias: "",
            headline: false,
            program_language: "typescript, react js",
            framework: "",
            library: "Google Map, webpack, babel, eslint, react-router-dom, readux@toolkit, code-splitting, compores, optimitation",
            short_description: "",
            description: "",
            task: [
                "Role sebagai Leader",
                "menentukan Alur Program sesuai kebutuhan user",
                "menganalisis relasi table",
            ],
            company: "PT Quadran",
            status: "Production",
            period: timeFormat("2020-09", "MMMM YYYY"),
            images: [
                "/static/info-pdm/dashboard.png"
            ],
        },
        {
            name: "SI-KEREN DPPKB Bandung",
            alias: "",
            headline: true,
            program_language: "PHP",
            framework: "Laravel 8",
            library: "",
            short_description: "Aplikasi pelaporan penyuluhan KB",
            description: "",
            task: [
                "Role sebagai Leader",
                "menentukan Alur Program sesuai kebutuhan user",
                "menganalisis relasi table",
                "mengerjakan front end dan sebagian Rest API",

            ],
            company: "PT Quadran",
            period: "2020",
            images: [
                "/static/si-keren/home.png"
            ],
            status: "Production"
        },
        {
            name: "Sistem Informasi di PLN Kalimantan",
            alias: "",
            headline: false,
            program_language: "PHP",
            framework: "code igniter 2",
            library: "Google Map, highchart, datatable, jqwidget",
            short_description: "",
            description: "",
            task: "",
            company: "PT Quadran",
            period: "2018",
            images: [
                "/static/uikl/home.png"
            ],
            status: "Production"
        },
        {
            name: "Rest API GO TRANS",
            alias: "",
            headline: false,
            program_language: "PHP",
            framework: "Phalcon",
            library: "Phalcon",
            short_description: "",
            description: "",
            task: "",
            company: "-",
            period: "2016",
            images: [
                "/static/gotrans/home.png"
            ],
            status: "Production"
        },
        {
            name: "Inventori Obat",
            alias: "",
            headline: false,
            program_language: "PHP",
            framework: "",
            library: "jQuery,Bootstrap",
            short_description: "Aplikasi ini dibuat untuk menentukan pengendalian dan perencanaan obat di Dinas Kesehatan Kota Bandung",
            description: 
            `Aplikasi ini implementasi metode Singel Moving Avaragge untuk mengetahui jumlah kebutuhan obat 
            dan metode Economic Quantity Order untuk menentukan jumlah obat yang harus dipesan.
            Aplikasi digunakan untuk kebutuhan skripsi`,
            task: [
                "analisis kasus",
                "membuat UI/UX",
                "menentukan alur program",
                "membuat crud data yang dibutuhkan",
                "implementasi metode Analytical Hierarchy Proses dalam menentukan potensial aset ",
                "bugfix"
            ],
            company: "PT. KAI DAOP 2 Bandung",
            period: timeFormat("2013-06", "MMMM YYYY"),
            images: null,
            status: "Production"
        },
        {
            name: "GIS Potensial Aset",
            alias: "",
            headline: false,
            program_language: "PHP",
            framework: "",
            library: "jQuery,Bootstrap",
            short_description: "Aplikasi ini dibuat untuk menentukan potensial dari aset PT. KAI DAOP 2 Bandung.",
            description: "Aplikasi ini implementasi metode Analytical Hierarchy Proses dalam menentukan petensial dari aset yang ada di PT. KAI DAOP 2 Bandung. Aplikasi digunakan untuk kebutuhan skripsi",
            task: [
                "analisis kasus",
                "membuat UI/UX",
                "menentukan alur program",
                "membuat crud data yang dibutuhkan",
                "implementasi metode Analytical Hierarchy Proses dalam menentukan potensial aset ",
                "bugfix"
            ],
            company: "PT. KAI DAOP 2 Bandung",
            period: timeFormat("2013-06", "MMMM YYYY"),

            images: null,
            status: "Production"
        },
        {
            name: "Sistem Penjadwalan Kursus",
            alias: "",
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
            company: "-",
            period: "2012",
            images: [
                "/static/penjadwalan/jadwal.png"
            ],
            status: "Production"
        }
    ]
}