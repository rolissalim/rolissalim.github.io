import { timeFormat } from "@app/helpers/Time.helper";
import i18next from "i18next";

export function biodata() {
    return [
        {
            key: i18next.t("Fullname"),
            value: "Nurdin Rolissalim",
        },
        {
            key: i18next.t("Gender"),
            value: i18next.t("Man"),
        },
        {
            key: i18next.t("Birthday"),
            value: timeFormat("1986-06-21", "DD MMMM YYYY")
        },
        {
            key: "Email",
            value: ["nurdinif14@gmail.com", " nurdin.rolissalim@gmail.com"]
        },
        // {
        //     key: "Address",
        //     value: ""
        // },
    ]
}

export function biodataRight() {
    return [
        {
            key: i18next.t("Tertiary Education"),
            value: "S1 Teknik Informatika",
        },
        {
            key: "IPK",
            value: 3.12,
        },
        {
            key: i18next.t("University"),
            value: "UNIKOM",
        },
        {
            key: i18next.t("Graduated"),
            value: timeFormat("2013-08-30", "DD MMMM YYYY")
        },
        // {
        //     key: "Address",
        //     value: ""
        // },
    ]
}

export function jobExperience() {
    return [
        {
            key: "image",
            value: "/static/profile.jpg"
        },
        {
            key: "Github Page",
            value: "https://rolissalim.github.io/"
        },
        {
            key: "Frontend",
            value: "React js, PHP, "
        },
        {
            key: "Backend",
            value: "Node js, express js, PHP "
        },
        {
            key: "Tools",
            value: "Webpack, babel, mapbox, jwt, e-chart, laravel"
        },

    ]
}
export function companyExperience() {
    return [
        {
            name: "PT. eBdesk Teknologi",
            join: `${timeFormat("2014-01-01", "DD MMMM YYYY")} - ${i18next.t("now")}`,
            status: i18next.t("Permanent Employees"),
            task: [
                "menganalisis kebutuhan suatu aplikasi",
                "menganalisis database",
                "integrasi api",
                "membuat web baru",
                "Menentukan UI/UX",
                "Maintenance semua web di tim smart city"
            ]
        },
        {
            name: "PT. Quadran",
            join: `2019 - 2021`,
            status: i18next.t("Freelance"),
            task: [
                "Leader freelances yang sudah direkrut",
                "Menganalisis kebutuhan suatu user",
                "Menganalisis database",
                "Integrasi api",
                "Membuat dan menentukan aplikasi berfungsi dengan baik",
                "Membuat timeline supaya proyek sesuai dengan deadline"
            ]
        },
    ]
}

