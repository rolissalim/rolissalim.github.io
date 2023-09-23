import { timeFormat } from "@app/helpers/Time.helper";
import i18n from 'i18next';

export function projectData() {
    return [
        {
            name: "Caleg PDI Banten I",
            alias: "-",
            headline: false,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, echart, Google map, bootstrap, jwt, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-09", "MMMM YYYY"),
            images: null,
            status: "Maintenance",
            link: "https://calegbanten.galangsuara.id/"
        },
        {
            name: "Caleg CMS FE",
            alias: "-",
            headline: true,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, ,echart, Google map, bootstrap, jwt",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-08", "MMMM YYYY"),
            images: null,
            status: "Development",
            link: null
        },
        {
            name: "Caleg CMS BE",
            alias: "-",
            headline: true,
            program_language: "express JS",
            framework: "-",
            library: "typescript, migrate, jwt, typeorm",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai backend",
                "menganalisis database",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-08", "MMMM YYYY"),
            images: null,
            status: "Development",
            link: null
        },
        {
            name: "Caleg PDI Kab Ngawi",
            alias: "-",
            headline: false,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, echart, Google map, bootstrap, jwt, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-07", "MMMM YYYY"),
            images: [
                "/static/caleg-ngawi/statistic.png",
                "/static/caleg-ngawi/login.png",
            ],
            status: "Maintenance",
            link: "https://calegpartai.galangsuara.id/signin"
        },
        {
            name: "Galang Suara 2024",
            alias: "-",
            headline: true,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, highcart, Google map, bootstrap, jwt, mapbox, ",
            short_description: "-",
            description: "-",
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
            alias: "-",
            headline: false,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, highcart, Google map, bootstrap, jwt, geocode,",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: "2022",
            images: [
                "/static/smart-city-cms-v2/login.png",
                "/static/smart-city-cms-v2/store.png",
                "/static/smart-city-cms-v2/news-online.png",
            ],
            status: "Pending development",
            link: null
        },
        {
            name: "Smart City Client V2",
            alias: "-",
            headline: true,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, highcart, Google map, bootstrap, jwt, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: `2021 - ${i18n.t("now")}`,
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
            alias: "-",
            headline: false,
            program_language: "Angular 4",
            framework: "-",
            library: "typescript, highcart, Google map",
            short_description: "-",
            description: "-",
            task: "role sebagai frontend. maintenance dan membuat fitur baru.",
            company: "PT eBdesk Teknologi",
            period: "2018-2021",
            images: [
                "/static/smart-city/home.png"
            ],
            status: "upgraded React JS",
            link: null
        },
        {
            name: "Smart City CMS V2",
            alias: "",
            headline: false,
            program_language: "typecript, Angular 9",
            framework: "Angular",
            library: "",
            short_description: "",
            description: "",
            task: "",
            company: "PT Ebdesk Teknologi",
            period: "2020",
            images: [
                "/static/smart-city-v2-cms-angular9/home.png"
            ],
            status: "Pending",
            link: null
        },
        {
            name: "Politica",
            alias: "-",
            headline: false,
            program_language: "Angular 8",
            framework: "-",
            library: "highcart, google map, typescript",
            short_description: "-",
            description: "-",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            period: "2019",
            images: [
                "/static/politica/home.png"
            ],
            status: "Production"
        },
        {
            name: "Smart City",
            alias: "-",
            headline: false,
            program_language: "Angular 2",
            framework: "Angular",
            library: "Highcart, Google map",
            short_description: "-",
            description: "-",
            task: "role sebagai frontend. maintenance dan membuat fitur baru.",
            company: "PT eBdesk Teknologi",
            period: `2018 - ${i18n.t("now")}`,
            images: [
                "/static/smart-city-cms-angular2/home.png"
            ],
            status: "Maintenance",
            link: "https://cc.sekota.id/monitoring"
        },
        {
            name: "Media Sosial Terhadap Paslon Wakil Rakyat",
            alias: "-",
            headline: false,
            program_language: "PHP, javascript",
            framework: "Code Igniter 2",
            library: "highcart",
            short_description: "-",
            description: "-",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            status: "Production",
            period: "2018",
            link: null
        },
        {
            name: "Intelligence Media Analist",
            alias: "IMA",
            headline: false,
            program_language: "Angular 8",
            framework: "Zend",
            library: "Google Map, highcart, ",
            short_description: "aplikasi ini adalah upgrade tool dari aplikasi IMM hanya dari segi UI dan role sedikit berbeda",
            description: "-",
            task: "maintenance aplikasi ",
            company: "PT eBdesk Teknologi",
            status: "Maintenance",
            period: "2018",
            images: [
                "/static/ima/home.png"
            ],
            link: "https://ima.ebdesk.com/"
        },
        {
            name: "Intelligence Perception Analysis",
            alias: "IPA",
            headline: false,
            program_language: "PHP, javascript",
            framework: "Code Igniter 2",
            library: "Google Map, highcart,",
            short_description: "-",
            description: "-",
            task: "maintenance dan fitur baru",
            company: "PT eBdesk Teknologi",
            period: "2016-2018",
            images: [
                "/static/ipa/compare.png"
            ],
            status: "Production",
            link: "https://ipa.ebdesk.com/"
        },
        {
            name: "Intelligence Media Management",
            alias: "IMM",
            headline: false,
            program_language: "PHP, javascript",
            framework: "Zend",
            library: "Google Map, Highcart,",
            short_description: "Analisis konten media yang di ambil dari media news yang terpercaya",
            description: "Aplikasi berbasis web. Aplikasi ini digunakan untuk keperluan  ",
            task: "half fullstack, maintenance aplikasi dan fitur baru, re-structure code",
            company: "PT eBdesk Teknologi",
            period: "2014 - 2017",
            images: [
                "/static/imm/tv-news.png"
            ],
            status: "Production",
            link: "https://imm.ebdesk.com/"
        },

    ]
}