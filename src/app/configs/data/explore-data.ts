import { timeFormat } from "@app/helpers/Time.helper";

export function exploreData() {
    return [
        {
            name: "learning next js",
            alias: "",
            headline: true,
            program_language: "react js",
            framework: "next js",
            library: "axios",
            short_description: "",
            description: "",
            period: timeFormat("2023-10", "MMM YYYY"),
            images: [
                "/static/learning-nextjs/learning-nextjs.png",
                "/static/learning-nextjs/learning-nextjs-2.png",
                "/static/learning-nextjs/learning-nextjs-3.png",
            ],
            task: [
                "role sebagai FE"
            ],
            source_code: "https://github.com/rolissalim/learning-next-js",
            type:"explore"
        },
        {
            name: "Express JS Rest API",
            alias: "",
            headline: true,
            program_language: "node js",
            framework: "express js",
            library: "migrate, mysql, jwt,swagger",
            short_description: "project ini dibuat untuk belajar express js Rest API",
            description: "project ini dibuat untuk belajar express js Rest API",
            period: timeFormat("2023-08", "MMM YYYY"),
            images: [

            ],
            task: [
                "role sebagai BE"
            ],
            source_code: "https://github.com/rolissalim/express-server-api",
            type:"explore"
        },
        {
            name: "java spring CRUD",
            alias: "",
            headline: true,
            program_language: "java",
            framework: "spring boot",
            library: "axos",
            short_description: "",
            description: "",
            period: timeFormat("2023-08", "MMM YYYY"),
            images: [

            ],
            task: [
                "role sebagai BE"
            ],
            source_code: "https://github.com/rolissalim/java_spring_crud",
            type:"explore"
        },
        {
            name: "Explore Aplikasi Desa",
            alias: "",
            headline: true,
            program_language: "PHP",
            framework: "laravel 8",
            library: "bootstrap, jquery,javascript",
            short_description: "Aplikasi ini digunakan hanya untuk explore dan demo",
            description: "Aplikasi ini digunakan hanya untuk explore dan demo.",
            task: [
                "role sebagai fullstack",
                "membuat fitur baru",
                "membuat code standar",
            ],
            company: "PT eBdesk Teknologi",
            period: "2021",
            status: "change to react js",
            source_code: "https://gitlab.com/nurdin_rolissalim/aplikasi-desa",
            type:"explore"
        },
        {
            name: "Aplikasi Politica Mobile",
            alias: "",
            headline: false,
            program_language: "Typescript",
            framework: "React native",
            library: "Highcart",
            short_description: "",
            description: "",
            task: "role sebagai frontend. membuat aplikasi semua fitur.",
            company: "PT eBdesk Teknologi",
            period: "2017",
            status: "Not used",
            source_code: "https://gitlab.com/nurdin_rolissalim/explore-react-native",
            type:"explore"
        },
        {
            name: "RE-Structure IMM",
            alias: "IMM",
            headline: false,
            program_language: "PHP",
            framework: "Code Igniter 2",
            library: "Google Map, Highcart,",
            short_description: "",
            description: "",
            task: "",
            company: "PT eBdesk Teknologi",
            period: 2015,
            status: "has been upgraded",
            type:"explore"
        },
    ]
}