import { add_video, notification, avatar, explore, home, subscriptions, youtube_music,
    library } from "../assets";


export const sideAvatar = [
    {
        id: 'video',
        icon: add_video,
        text: 'Create'
    },
    {
        id: 'notif',
        icon: notification,
        text: 'Notifications',
        noti: '3'
    },
];

export const sideBar = [
    { name: 'Home', icon: home },
    { name: 'Explore', icon: explore },
    { name: 'Subscriptions', icon: subscriptions },
    { name: 'Youtube Music', icon: youtube_music },
    { name: 'Library', icon: library }
];

export const Categories = [
    'All', 'Coding', 'Live', 'Music', 'JS Mastery', 'SB19', 'Education', 'Mobile Legends',
    'Camping', 'Javascript', 'ReactJS', 'Geo Ong', 'Opm'
]

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export const DemoPicture = 'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png';