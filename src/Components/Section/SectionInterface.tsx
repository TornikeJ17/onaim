interface SectionProps {
    tabMenuActive: number | null;
    setTabMenuActive: (id: number) => void;
    gameTabMenuActive: number | null;
    setGameTabMenuActive: (id: number) => void;
    leaderboardTabActive: number | null;
    setLeaderboardTabActive: (id: number) => void;
}

export type { SectionProps };
