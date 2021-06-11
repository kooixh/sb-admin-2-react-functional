module.exports = {
    alerts: [
        {
            link: "/link-to-message",
            date: "December 12, 2019",
            message: "A new monthly report is ready to download!",
            icon: "fas fa-file-alt text-white",
            iconProps: "bg-primary"
        },
        {
            link: "/link-to-message",
            date: "December 7, 2019<",
            message: "$290.29 has been deposited into your account!",
            icon: "fas fa-donate text-white",
            iconProps: "bg-success"
        },
        {
            link: "/link-to-message",
            date: "December 2, 2019",
            message: "Spending Alert: We've noticed unusually high spending for your account.",
            icon: "fas fa-exclamation-triangle text-white",
            iconProps: "bg-warning"
        }
    ],

    messages: [
        {
            link: "/link-to-message",
            messageTimeAgo: "60m",
            message: "Hi there! I am wondering if you can help me with a problem I've been having.",
            profilePic: "../../../assets/img/undraw_profile_1.svg",
            picSrc: "internal",
            messageProps: "bg-success",
            username: "Emily Fowler"
        },
        {
            link: "/link-to-message",
            messageTimeAgo: "1d",
            message: "I have the photos that you ordered last month, how would you like them sent to you?",
            profilePic: "../../../assets/img/undraw_profile_2.svg",
            picSrc: "internal",
            messageProps: "bg-success",
            username: "Jae Chun"
        },
        {
            link: "/link-to-message",
            messageTimeAgo: "2d",
            message: "Last month's report looks great, I am very happy with the progress so far, keep up the good work!",
            profilePic: "../../../assets/img/undraw_profile_3.svg",
            picSrc: "internal",
            messageProps: "bg-warning",
            username: "Morgan Alvarez"
        },
        {
            link: "/link-to-message",
            messageTimeAgo: "2w",
            message: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...",
            profilePic: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
            picSrc: "external",
            messageProps: "bg-success",
            username: "Chicken the Dog"
        }
    ],

    userActions: [
        {
            link: "/my-profile",
            icon: "fas fa-user fa-sm fa-fw mr-2 text-gray-400",
            title: "Profile"
        },
        {
            link: "/settings",
            icon: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400",
            title: "Settings"
        },
        {
            link: "/log",
            icon: "fas fa-list fa-sm fa-fw mr-2 text-gray-400",
            title: "Activity Log"
        }
    ],

    user: {
        name: "Douglas McGee",
        profilePic: "../../../assets/img/undraw_profile.svg",
        picSrc: "internal"
    }
};
