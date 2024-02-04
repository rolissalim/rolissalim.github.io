import { timeFormat } from "@app/helpers/Time.helper";
import i18n from 'i18next';

export function projectData() {
    return [
        {
            name: "Debat Web v3",
            alias: "-",
            headline: true,
            program_language: "React JS",
            framework: "-",
            library: "react js, echarts, eslint, prettier, redux toolkit, bootstrap, mapbox, webpack, babel",
            short_description: "Debat web adalah website tanggapan masyarakat baik media online dan media sosial terhadap pra dan pasca debat baik pemilihan presiden atau pilkada",
            description: "Debat web adalah website tanggapan masyarakat baik media online dan media sosial terhadap pra dan pasca debat baik pemilihan presiden atau pilkada",
            task: [
                "role sebagai fullstack",
                "role sebagai desain",
                "membuat fitur baru",
                "development",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-01-27", "MMM")} - ${timeFormat("2023-02-07", "MMM YYYY")}`,
            images: [
                "/static/debat-v3/3.png",
                "/static/debat-v3/4.png",
                "/static/debat-v3/7.png",
                "/static/debat-v3/1.png",
                "/static/debat-v3/2.png",
                "/static/debat-v3/9.png",
            ],
            status: "Development",
            link: null,
            source_code:null,
            data_source:"rest api, file txt, file json",
            type: "project",
            keyword: "react js, echarts, eslint, prettier, redux toolkit, bootstrap,webpck, babel",
        },
        {
            name: "Debat Web v2",
            alias: "-",
            headline: false,
            program_language: "Next JS",
            framework: "-",
            library: "react js, echarts, eslint, prettier, redux toolkit, bootstrap",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai fullstack",
                "membuat fitur baru",
                "development",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-12-20", "MMM")} - ${timeFormat("2023-01-10", "MMM YYYY")}`,
            images: [
                "/static/debat-v2/7.png",
                "/static/debat-v2/6.png",
                "/static/debat-v2/8.png",
                "/static/debat-v2/9.png",
                "/static/debat-v2/2.png",
            ],
            status: "Development",
            link: null,
            source_code:null,
            data_source:"rest api, file txt, file json",
            type: "project",
            keyword: "next js, react js, echarts, eslint, prettier, redux toolkit, bootstrap",
        },
        {
            name: "Pegasus web",
            alias: "-",
            headline: true,
            program_language: "Laravel 9",
            framework: "-",
            library: "mapbox, highchart, Google map, jwt, SockJS",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-11-15", "MMM")} - ${timeFormat("2023-12-6", "MMM YYYY")}`,
            images: [
                "/static/pegasus-web/1.png",
                "/static/pegasus-web/2.png",
            ],
            status: "Maintenance",
            link: "https://pegasus.blackeye.id/",
            type: "project",
            keyword: "Laravel, PHP, mapbox, highchart, Google map, jwt, SockJS, bootstrap"
        },
        {
            name: "Pegasus Rest API",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "jwt,  kafka, queue",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai backend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-11-15", "MMM")} - ${timeFormat("2023-12-6", "MMM YYYY")}`,
            images: [
                "/static/pegasus-api/1.png",
            ],
            status: "Maintenance",
            link: "https://pegasus-service.blackeye.id/api/documentation",
            type: "project",
            keyword: "Laravel,jwt, mysql, PHP"
        },
        {
            name: "Gaskeun web",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "mapbox, highchart, Google map, jwt, SockJS",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-10", "MMM")} - ${timeFormat("2023-12", "MMM YYYY")}`,
            images: [
                "/static/gaskeun-web/1.png",
                "/static/gaskeun-web/2.png",
            ],
            status: "Maintenance",
            link: "https://cms-progv3.blackeye.id/",
            type: "project",
            keyword: "Laravel, PHP, mapbox, highchart, Google map, jwt, SockJS, bootstrap"
        },
        {
            name: "Gaskeun Rest API",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "jwt,  kafka, queue",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai backend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-10", "MMM")} - ${timeFormat("2023-12", "MMM YYYY")}`,
            images: [
                "/static/gaskeun-api/1.png",
            ],
            status: "Maintenance",
            link: "https://pegasus-service.blackeye.id/api/documentation",
            type: "project",
            keyword: "Laravel, PHP, jwt, MySQL"
        },
        {
            name: "Lebak Bulus web",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "mapbox, highchart, Google map, jwt, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-10-01", "MMM YYYY"),
            images: [
                "/static/caleg-banten/caleg banten.png",
                "/static/caleg-banten/caleg banten 1.png",
            ],
            status: "Maintenance",
            link: "https://lebakbulus.blackeye.id/",
            type: "project",
            keyword: "Laravel, PHP, mapbox, highchart, Google map, jwt, SockJS,bootstrap"
        },
        {
            name: "Lebak Bulus Rest API",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "jwt,  kafka, queue",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai backend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-10-01", "MMM YYYY")}`,
            images: [
                "/static/lebak-bulus-api/1.png",
            ],
            status: "Maintenance",
            link: "https://lebakbulus-service.blackeye.id/api/documentation",
            type: "project",
            keyword: "Laravel, PHP,  jwt, MySQL"
        },
        {
            name: "Merapi web",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "mapbox, highchart, Google map, jwt, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-10-01", "MMM YYYY"),
            images: [
                "/static/merapi-api/1.png",
            ],
            status: "Maintenance",
            link: "https://merapi.blackeye.id/",
            type: "project",
            keyword: "Laravel, PHP mapbox, highchart, Google map, jwt,bootstrap"
        },
        {
            name: "Merapi Rest API",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "jwt, kafka, queue",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai backend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-10-01", "MMM YYYY"),
            images: [
                "/static/merapi-api/1.png",
            ],
            status: "Maintenance",
            link: "https://merapi-service.blackeye.id/api/documentation",
            type: "project",
            keyword: "Laravel, PHP, jwt, MySQL"
        },
        {
            name: "Ayam kinantan web",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "mapbox, highchart, Google map, jwt, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-10-01", "MMM YYYY"),
            images: [
                "/static/caleg-banten/caleg banten.png",
                "/static/caleg-banten/caleg banten 1.png",
            ],
            status: "Maintenance",
            link: "https://ayamkinantan.blackeye.id/",
            type: "project",
            keyword: "Laravel, PHP, mapbox, highchart, Google map, jwt,bootstrap"
        },
        {
            name: "Ayam kinantan Rest API",
            alias: "-",
            headline: false,
            program_language: "Laravel 9",
            framework: "-",
            library: "jwt, kafka, queue",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai backend",
                "membuat fitur baru",
                "maintenance",
            ],
            company: "PT eBdesk Teknologi",
            period: timeFormat("2023-10-01", "MMM YYYY"),
            images: [
                "/static/ayam-kinantan-api/1.png",
            ],
            status: "Maintenance",
            link: "https://ayamkinantan-service.blackeye.id/api/documentation",
            type: "project",
            keyword: "Laravel, PHP, MySQL, jwt"
        },
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
            period: timeFormat("2023-09", "MMM YYYY"),
            images: [
                "/static/caleg-banten/caleg banten.png",
                "/static/caleg-banten/caleg banten 1.png",
            ],
            status: "Maintenance",
            link: "https://calegbanten.galangsuara.id/",
            type: "project",
            keyword: "react js, Webpack, babel, eslint, typescript, mapbox, echarts,  jwt, bootstrap"
        },
        {
            name: "Caleg CMS FE",
            alias: "-",
            headline: false,
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
            period: timeFormat("2023-08", "MMM YYYY"),
            images: null,
            status: "Development",
            link: null,
            type: "project",
            keyword: "react js, Webpack, babel, eslint, typescript, mapbox, echarts,  jwt, bootstrap"

        },
        {
            name: "Caleg CMS BE",
            alias: "-",
            headline: false,
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
            period: timeFormat("2023-08", "MMM YYYY"),
            images: null,
            status: "Development",
            link: null,
            type: "project",
            keyword: "express js, typecript, migrate, eslint,typeorm, jwt,"
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
            period: timeFormat("2023-07", "MMM YYYY"),
            images: [
                "/static/caleg-ngawi/statistic.png",
                "/static/caleg-ngawi/login.png",
            ],
            status: "Maintenance",
            link: "https://calegpartai.galangsuara.id/signin",
            type: "project",
            keyword: "react js,  typecript, webpack, babel, eslint, echart, Google map, bootstrap, jwt,"
        },
        {
            name: "Galang Suara 2024",
            alias: "-",
            headline: true,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, echart, Google map, bootstrap, jwt, mapbox, ",
            short_description: "-",
            description: "-",
            task: [
                "role sebagai frontend",
                "membuat fitur baru",
                "membuat code standar",
                "membuat compenents yang reuseable",

            ],
            company: "PT eBdesk Teknologi",
            period: `${timeFormat("2023-03", "MMM")} - ${i18n.t("now")}`,
            images: [
                "/static/galang-suara-2024/real-count.png",
                "/static/galang-suara-2024/master-real-count.png",
                "/static/galang-suara-2024/dashboard.png",
                "/static/galang-suara-2024/dashboard-2.png",
                "/static/galang-suara-2024/administrator.png",
                "/static/galang-suara-2024/login.png",
            ],
            status: "Maintenance",
            link: "https://cms.galangsuara.id",
            type: "project",
            keyword: "react js, bootstrap, webpack, eslint, babel, echart, mapbox, jwt, "
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
            link: null,
            type: "project",
            keyword: "react js, typescript, babel, webpack, esline, google map, geocode, bootstrap, jwt, "
        },
        {
            name: "Smart City Client V2",
            alias: "-",
            headline: true,
            program_language: "React JS",
            framework: "-",
            library: "typecript, webpack, babel, eslint, highcart, Google map, bootstrap ",
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
            link: "https://web2.sekota.id/kabsintang/menu/grid",
            type: "project",
            keyword: "react js, wabpack, babel, eslint, highchart, google map, bootstrap"
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
            link: null,
            type: "project",
            keyword: "angular 4, highchart, google map"
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
            link: null,
            type: "project",
            keyword: "angular 9, bootstrap, jwt, "
        },
        {
            name: "Politica",
            alias: "-",
            headline: false,
            program_language: "Angular 8",
            framework: "-",
            library: "highcart, typescript",
            short_description: "-",
            description: "-",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            period: "2019",
            images: [
                "/static/politica/home.png"
            ],
            status: "Production",
            link: "https://politica.ebdesk.com/auth/login",
            type: "project",
            keyword: "angular 8, highcharts, bootstrap,jwt, typescript ",
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
            link: "https://cc.sekota.id/monitoring",
            type: "project",
            keyword: "angular 2, echarts ",
        },
        {
            name: "Debat App",
            alias: "-",
            headline: false,
            program_language: "PHP, javascript",
            framework: "",
            library: "highcharts, javascript, jquery, bootstrap ",
            short_description: "-",
            description: "-",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            status: "Production",
            period: "2018",
            link: null,
            type: "project",
            images: [
                "/static/debat/1.png",
                "/static/debat/2.png",
                "/static/debat/3.png",
                "/static/debat/4.png",
                "/static/debat/5.png",
                "/static/debat/6.png",
                "/static/debat/7.png",
            ],
            keyword: "php, highcharts, javascript, jquery, bootstrap ",
        },
        {
            name: "Intelligence Media Analist",
            alias: "IMA",
            headline: false,
            program_language: "Angular 8",
            framework: "Angular",
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
            link: "https://ima.ebdesk.com/",
            type: "project",
            keyword: "angular, typescript, bootstrap,css, google map,"
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
            link: "https://ipa.ebdesk.com/",
            type: "project",
            keyword: "code igniter 2, php,javascript, jquery, highcharts, jwt, bootstrap,css"
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
            link: "https://imm.ebdesk.com/",
            type: "project",
            keyword: "zend framework, php, highcharts, jquery, javascritp, bootstrap, css"
        },

    ]
}