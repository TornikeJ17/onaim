const tabMenuList = [
    {
        id: 1,
        title: "Games",
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.375 5.875h-.182a4.375 4.375 0 1 0-8.386 0h-.182a4.375 4.375 0 1 0 1.917 8.309l-.64 2.136a.625.625 0 0 0 .598.805h5a.627.627 0 0 0 .598-.805l-.64-2.136a4.373 4.373 0 0 0 6.182-4.9 4.375 4.375 0 0 0-4.265-3.41m0 7.5a3.13 3.13 0 0 1-2.61-1.406.625.625 0 0 0-1.119.524l1.016 3.38h-3.32l1.015-3.38a.625.625 0 0 0-1.123-.524 3.125 3.125 0 1 1-1.557-4.665.625.625 0 0 0 .73-.938 3.125 3.125 0 1 1 5.187 0 .625.625 0 0 0 .729.938 3.125 3.125 0 1 1 1.052 6.071"
                    fill="#fff"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Leaderboards",
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.125 16.125A.63.63 0 0 1 9.5 15.5v-1.75a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v1.75a.63.63 0 0 1-.625.625"
                    fill="#fff"
                />
                <path
                    d="M14.916 18.959H5.333v-1.458a2.29 2.29 0 0 1 2.292-2.292h5a2.29 2.29 0 0 1 2.291 2.292zm-8.333-1.25h7.083v-.208c0-.575-.466-1.042-1.041-1.042h-5c-.575 0-1.042.467-1.042 1.042z"
                    fill="#fff"
                />
                <path
                    d="M15.125 18.959h-10a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h10a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625m.234-8.592a.64.64 0 0 1-.475-.217.62.62 0 0 1-.1-.658c.283-.65.425-1.342.425-2.067v-2.5c0-.292-.05-.575-.15-.875l-.025-.092A2 2 0 0 1 15 3.592a.63.63 0 0 1 .625-.625h.5c1.492 0 2.709 1.25 2.709 2.791A4.9 4.9 0 0 1 17.4 9.2c-.016.017-.066.058-.075.067-.491.408-1.05.867-1.8 1.075a.6.6 0 0 1-.166.025M16.4 4.242c.042.225.059.458.059.683v2.5c0 .342-.025.667-.075 1l.141-.117a3.64 3.64 0 0 0 1.059-2.55c0-.75-.509-1.383-1.184-1.516M4.65 10.333a.5.5 0 0 1-.191-.033A4.64 4.64 0 0 1 2.6 9.15c-.958-1.058-1.433-2.217-1.433-3.442A2.68 2.68 0 0 1 3.875 3h.542a.623.623 0 0 1 .575.875c-.133.3-.2.642-.2 1v2.5c0 .717.142 1.417.433 2.083a.63.63 0 0 1-.108.667.64.64 0 0 1-.467.208M3.584 4.275a1.444 1.444 0 0 0-1.167 1.433c0 .909.367 1.784 1.092 2.584a.7.7 0 0 0 .116.108 6 6 0 0 1-.083-1.025v-2.5c0-.2.017-.4.042-.6"
                    fill="#fff"
                />
                <path
                    d="M10 13.958c-3.558 0-6.458-2.9-6.458-6.459V5A3.96 3.96 0 0 1 7.5 1.041h5a3.96 3.96 0 0 1 3.959 3.958v2.5c0 3.559-2.9 6.459-6.459 6.459M7.5 2.29a2.714 2.714 0 0 0-2.708 2.708v2.5A5.21 5.21 0 0 0 10 12.708a5.21 5.21 0 0 0 5.209-5.209V5A2.714 2.714 0 0 0 12.5 2.291z"
                    fill="#fff"
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Missions",
        svg: (
            <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.9 17.742a1.44 1.44 0 0 1-.883-.275c-.333-.241-.85-.866-.525-2.266l.475-2.05c.042-.175-.05-.492-.175-.626l-1.658-1.658c-.875-.875-.8-1.633-.684-2.008.117-.375.5-1.034 1.717-1.242l2.125-.35c.158-.025.417-.217.483-.358l1.175-2.35c.567-1.134 1.317-1.3 1.717-1.3s1.15.166 1.717 1.3l1.175 2.35c.075.141.325.333.483.358l2.125.35c1.217.2 1.6.867 1.717 1.242s.191 1.133-.684 2.008l-1.658 1.658c-.125.125-.217.45-.175.625l.475 2.05c.325 1.409-.192 2.026-.525 2.267s-1.075.55-2.325-.191L12 16.092c-.166-.1-.516-.1-.683 0l-1.992 1.184c-.575.35-1.058.466-1.425.466M11.667 4.51c-.133 0-.375.158-.6.608l-1.175 2.35c-.25.508-.842.942-1.4 1.033l-2.125.35c-.475.084-.692.259-.733.392s.033.4.375.742l1.658 1.658c.425.425.65 1.2.517 1.784l-.475 2.05c-.142.591-.05.908.041.983.092.067.425.058.942-.258l2-1.184c.558-.333 1.4-.333 1.95 0l1.992 1.184c.525.308.858.325.95.258s.183-.383.041-.983l-.475-2.05c-.133-.592.084-1.359.517-1.784l1.658-1.658c.342-.342.417-.617.375-.742s-.258-.308-.733-.392l-2.125-.35c-.558-.091-1.15-.525-1.4-1.033l-1.175-2.35c-.225-.45-.467-.608-.6-.608m-5 .782h-5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625m-2.5 11.666h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M2.5 11.125h-.833a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625H2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
                    fill="#fff"
                />
            </svg>
        ),
    },
];

export { tabMenuList };
