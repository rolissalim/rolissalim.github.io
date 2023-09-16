import { timeFormat } from "@app/helpers/Time.helper";
import i18n from 'i18next';

export function projectData() {
    return [
        {
            name: "Caleg PDI Banten I",
            alias: "",
            headline: false,
            program_language: "typescript, react js, ",
            framework: "",
            library: "echart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-09", "MMMM YYYY"),
            images: null,
            status: "Maintenance"
        },
        {
            name: "Caleg CMS FE",
            alias: "",
            headline: true,
            program_language: "typescript, react js",
            framework: "",
            library: "echart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-08", "MMMM YYYY"),
            images: null,
            link: "https://calegbanten.galangsuara.id/",
            status: "Development"
        },
        {
            name: "Caleg CMS BE",
            alias: "",
            headline: true,
            program_language: "typescript, express JS",
            framework: "",
            library: "jwt, typeorm",
            short_description: "",
            description: "",
            task: [
                "role sebagai backend",
                "menganalisis database",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-08", "MMMM YYYY"),
            images: null,
            status: "Development"
        },
        {
            name: "Caleg PDI Kab Ngawi",
            alias: "",
            headline: false,
            program_language: "typescript, react js",
            framework: "",
            library: "echart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-07", "MMMM YYYY"),
            images: null,
            status: "Maintenance",
            link: "https://calegpartai.galangsuara.id/signin"
        },
        {
            name: "Galang Suara 2024",
            alias: "",
            headline: true,
            program_language: "typescript, react js",
            framework: "",
            library: "Highcart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-03", "MMMM")} - ${timeFormat("2023-07", "MMMM YYYY")}`,
            images: [
                "/static/galang-suara-2024/dashboard.png",
                "/static/galang-suara-2024/dashboard-2.png",
                "/static/galang-suara-2024/administrator.png",
                "/static/galang-suara-2024/login.png",
            ],
            status: "Maintenance",
            link: "https://cms.galangsuara.id"
        },
        {
            name: "Smart City CMS V2",
            alias: "",
            headline: false,
            program_language: "React JS, typescript",
            framework: "",
            library: "Highcart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: "2021",
            status: "Pending development"
        },
        {
            name: "Smart City Client V2",
            alias: "",
            headline: true,
            program_language: "typescript, react js",
            framework: "",
            library: "Highcart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: `2019 - ${i18n.t("now")}`,

            images: [
                "/static/smart-city-v2/menu.png",
                "/static/smart-city-v2/angkutan.png",
                "/static/smart-city-v2/agenda.png",
                "/static/smart-city-v2/video.png",
            ],
            status: "Maintenance",
            link: "https://web2.sekota.id/kabsintang/menu/grid"
        },
        {
            name: "Smart City Client",
            alias: "",
            headline: false,
            program_language: "Angular 4",
            framework: "Angular",
            library: "Highcart, Google map",
            short_description: "",
            description: "",
            task: "role sebagai frontend. maintenance dan membuat fitur baru.",
            company: "PT eBdesk Teknologi",
            period: "2018-2021",
            status: "not active"
        },
        {
            name: "Smart City",
            alias: "",
            headline: false,
            program_language: "Angular 2",
            framework: "Angular",
            library: "Highcart, Google map",
            short_description: "",
            description: "",
            task: "role sebagai frontend. maintenance dan membuat fitur baru.",
            company: "PT eBdesk Teknologi",
            period: `2018 - ${i18n.t("now")}`,
            status: "Maintenance",
            link: "https://cc.sekota.id/monitoring"
        },
        {
            name: "Politica",
            alias: "",
            headline: false,
            program_language: "Typescript, Angular 8",
            framework: "",
            library: "Highcart",
            short_description: "",
            description: "",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            period: "2019",
            status: "Production"
        },
        {
            name: "Media Sosial Terhadap Paslon Wakil Rakyat",
            alias: "",
            headline: false,
            program_language: "PHP",
            framework: "Code Igniter 2",
            library: "Highcart",
            short_description: "",
            description: "",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            status: "Production",
            period: "2018"
        },
        {
            name: "Intelligence Media Analist",
            alias: "IMA",
            headline: false,
            program_language: "Angular 8",
            framework: "Zend",
            library: "Google Map, Highcart, ",
            short_description: "aplikasi ini adalah upgrade tool dari aplikasi IMM hanya dari segi UI dan role sedikit berbeda",
            description: "",
            task: "maintenance aplikasi ",
            company: "PT eBdesk Teknologi",
            status: "Maintenance",
            period: "2018"
        },
        {
            name: "Intelligence Perception Analysis",
            alias: "IPA",
            headline: false,
            program_language: "PHP",
            framework: "Code Igniter 2",
            library: "Google Map, Highcart,",
            short_description: "",
            description: "",
            task: "maintenance dan fitur baru",
            company: "PT eBdesk Teknologi",
            period: "2016-2018",
            status: "Production"
        },
        {
            name: "Intelligence Media Management",
            alias: "IMM",
            headline: false,
            program_language: "PHP",
            framework: "Zend",
            library: "Google Map, Highcart,",
            short_description: "Analisis konten media yang di ambil dari media news yang terpercaya",
            description: "Aplikasi berbasis web. Aplikasi ini digunakan untuk keperluan  ",
            task: "half fullstack, maintenance aplikasi dan fitur baru",
            company: "PT eBdesk Teknologi",
            period: "2014 - 2017",
            status: "Production"
        },

    ]
}