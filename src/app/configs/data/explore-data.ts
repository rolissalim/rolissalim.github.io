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
            period: timeFormat("2023-10", "MMMM YYYY"),
            task: [
                "role sebagai FE"
            ],
            source_code: "https://github.com/rolissalim/learning-next-js"
        },
        {
            name: "Analisis Data kependudukan",
            alias: "",
            headline: false,
            program_language: "PHP",
            framework: "laravel 8",
            library: "Highcart, Google map, bootstrap, jwt, ",
            short_description: "",
            description: "",
            task: [
                "role sebagai fullstack",
                "membuat fitur baru",
                "membuat code standar",
            ],
            company: "PT eBdesk Teknologi",
            period: "2021",
            status: "change to react js",
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
            status: "not publish"
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
            status: "has been upgraded"
        },
    ]
}