export interface IAnimeData {
    spotlightAnimes: SpotlightAnime[];
    trendingAnimes: IAnime[];
    latestEpisodeAnimes: LatestCompletedAnime[];
    topUpcomingAnimes: TopUpcomingAnime[];
    top10Animes: Top10Animes;
    topAiringAnimes: LatestCompletedAnime[];
    mostPopularAnimes: IAnime[];
    mostFavoriteAnimes: IAnime[];
    latestCompletedAnimes: LatestCompletedAnime[];
    genres: string[];
}

export interface LatestCompletedAnime extends IAnime {
    duration?: string;
    rating?: null;
}

export interface Episodes {
    sub: number | null;
    dub: number | null;
}

export enum Type {
    Movie = "Movie",
    Ona = "ONA",
    Tv = "TV",
}



export interface IAnime {
    id: string;
    name: string;
    jname: string;
    poster: string;
    episodes: Episodes;
    type?: Type;
    rank?: number;
}

export interface SpotlightAnime {
    rank: number;
    id: string;
    name: string;
    description: string;
    poster: string;
    jname: string;
    episodes: Episodes;
    type: Type;
    otherInfo: string[];
}

export interface Top10Animes {
    today: LatestCompletedAnime[];
    week: IAnime[];
    month: LatestCompletedAnime[];
}

export interface TopUpcomingAnime {
    id: string;
    name: string;
    jname: string;
    poster: string;
    duration: string;
    type: string;
    rating: null | string;
    episodes: Episodes;
}
