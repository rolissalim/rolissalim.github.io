import { timeFormat } from "@app/helpers/Time.helper";
import i18next from "i18next";

export function biodata() {
    return [
        {
            key: i18next.t("Fullname"),
            value: "Nurdin Rolissalim"
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
    ]
}