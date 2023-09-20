import { timeFormat } from "@app/helpers/Time.helper";

export function biodata() {
    return [
        {
            key: "Fullname",
            value: "Nurdin Rolissalim"
        },
        {
            key: "Gender",
            value: "Man"
        },
        {
            key: "Birthday",
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
            value: "Node js, express js"
        },
    ]
}