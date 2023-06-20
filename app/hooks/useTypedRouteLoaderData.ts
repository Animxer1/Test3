import type { SerializeFrom } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';
import type { loader as RootLoader } from '~/root';
import type { loader as RoutesAnimeLoader } from '~/routes/anime/$animeId';
import type { loader as RoutesAnimeEpisodeWatchLoader } from '~/routes/anime/$animeId.episode.$episodeId.watch';
import type { loader as RoutesAnimeEpisodesLoader } from '~/routes/anime/$animeId/episodes';
import type { loader as RoutesAnimesIndexLoader } from '~/routes/anime/index';
import type { loader as RoutesPopularAnimeLoader } from '~/routes/anime/popular';
import type { loader as RoutesRecentAnimeLoader } from '~/routes/anime/recent-episodes';
import type { loader as RoutesTrendingAnimeLoader } from '~/routes/anime/trending';
import type { loader as RoutesCollectionLoader } from '~/routes/collections/$collectionsId';
import type { loader as RoutesDiscoverLoader } from '~/routes/discover/anime';
import type { loader as RoutesDiscoverMoviesLoader } from '~/routes/discover/movies';
import type { loader as RoutesDiscoverTvsLoader } from '~/routes/discover/tv-shows';
import type { loader as RoutesIndexLoader } from '~/routes/index';
import type { loader as RoutesMovieLoader } from '~/routes/movies/$movieId';
import type { loader as RoutesMovieWatchLoader } from '~/routes/movies/$movieId.watch';
import type { loader as RoutesMovieCastsLoader } from '~/routes/movies/$movieId/cast';
import type { loader as RoutesMovieCrewsLoader } from '~/routes/movies/$movieId/crew';
import type { loader as RoutesMovieIndexLoader } from '~/routes/movies/$movieId/index';
import type { loader as RoutesMoviePhotosLoader } from '~/routes/movies/$movieId/photos';
import type { loader as RoutesMovieRecommendationsLoader } from '~/routes/movies/$movieId/recommendations';
import type { loader as RoutesMovieSimilarLoader } from '~/routes/movies/$movieId/similar';
import type { loader as RoutesMovieVideosLoader } from '~/routes/movies/$movieId/videos';
import type { loader as RoutesMoviesIndexLoader } from '~/routes/movies/index';
import type { loader as RoutesPopularMoviesLoader } from '~/routes/movies/popular';
import type { loader as RoutesTopRatedMoviesLoader } from '~/routes/movies/top-rated';
import type { loader as RoutesUpcomingMoviesLoader } from '~/routes/movies/upcoming';
import type { loader as RoutesPersonLoader } from '~/routes/people/$peopleId';
import type { loader as RoutesPersonCreditsLoader } from '~/routes/people/$peopleId/credits';
import type { loader as RoutesPersonMediaLoader } from '~/routes/people/$peopleId/media';
import type { loader as RoutesPeopleIndexLoader } from '~/routes/people/index';
import type { loader as RoutesSearchAnimeLoader } from '~/routes/search/anime/$animeKeyword';
import type { loader as RoutesSearchAnimeIndexLoader } from '~/routes/search/anime/index';
import type { loader as RoutesSearchMovieLoader } from '~/routes/search/movie/$movieKeyword';
import type { loader as RoutesSearchMovieIndexLoader } from '~/routes/search/movie/index';
import type { loader as RoutesSearchPeopleLoader } from '~/routes/search/people/$peopleKeyword';
import type { loader as RoutesSearchPeopleIndexLoader } from '~/routes/search/people/index';
import type { loader as RoutesSearchTvLoader } from '~/routes/search/tv/$tvKeyword';
import type { loader as RoutesSearchTvIndexLoader } from '~/routes/search/tv/index';
import type { loader as RoutesTestLoader } from '~/routes/test';
import type { loader as RoutesTestPlayerLoader } from '~/routes/test/player';
import type { loader as RoutesTrendingTodayLoader } from '~/routes/trending/today';
import type { loader as RoutesTrendingThisWeekLoader } from '~/routes/trending/week';
import type { loader as RoutesTvLoader } from '~/routes/tv-shows/$tvId';
import type { loader as RoutesTvSeasonLoader } from '~/routes/tv-shows/$tvId.season.$seasonId';
import type { loader as RoutesTvSeasonEpisodeWatchLoader } from '~/routes/tv-shows/$tvId.season.$seasonId.episode.$episodeId.watch';
import type { loader as RoutesTvSeasonCastsLoader } from '~/routes/tv-shows/$tvId.season.$seasonId/cast';
import type { loader as RoutesTvSeasonCrewsLoader } from '~/routes/tv-shows/$tvId.season.$seasonId/crew';
import type { loader as RoutesTvSeasonPhotosLoader } from '~/routes/tv-shows/$tvId.season.$seasonId/photos';
import type { loader as RoutesTvSeasonVideosLoader } from '~/routes/tv-shows/$tvId.season.$seasonId/videos';
import type { loader as RoutesTvCastsLoader } from '~/routes/tv-shows/$tvId/cast';
import type { loader as RoutesTvCrewsLoader } from '~/routes/tv-shows/$tvId/crew';
import type { loader as RoutesTvIndexLoader } from '~/routes/tv-shows/$tvId/index';
import type { loader as RoutesTvPhotosLoader } from '~/routes/tv-shows/$tvId/photos';
import type { loader as RoutesTvRecommendationsLoader } from '~/routes/tv-shows/$tvId/recommendations';
import type { loader as RoutesTvSimilarLoader } from '~/routes/tv-shows/$tvId/similar';
import type { loader as RoutesTvVideosLoader } from '~/routes/tv-shows/$tvId/videos';
import type { loader as RoutesTvsIndexLoader } from '~/routes/tv-shows/index';
import type { loader as RoutesOnTvLoader } from '~/routes/tv-shows/on-the-air';
import type { loader as RoutesPopularTvsLoader } from '~/routes/tv-shows/popular';
import type { loader as RoutesTopRatedTvsLoader } from '~/routes/tv-shows/top-rated';
import type { loader as RoutesWatchHistoryLoader } from '~/routes/watch-history';

type Loaders = {
  root: typeof RootLoader;
  'routes/index': typeof RoutesIndexLoader;
  'routes/test': typeof RoutesTestLoader;
  'routes/trending/today': typeof RoutesTrendingTodayLoader;
  'routes/trending/this-week': typeof RoutesTrendingThisWeekLoader;
  'routes/watch-history': typeof RoutesWatchHistoryLoader;
  'routes/anime/$animeId.episode.$episodeId.watch': typeof RoutesAnimeEpisodeWatchLoader;
  'routes/anime/$animeId': typeof RoutesAnimeLoader;
  'routes/discover/anime': typeof RoutesDiscoverLoader;
  'routes/anime/index': typeof RoutesAnimesIndexLoader;
  'routes/anime/popular': typeof RoutesPopularAnimeLoader;
  'routes/anime/recent-episodes': typeof RoutesRecentAnimeLoader;
  'routes/anime/trending': typeof RoutesTrendingAnimeLoader;
  'routes/anime/$animeId/episodes': typeof RoutesAnimeEpisodesLoader;
  'routes/collections/$collectionsId': typeof RoutesCollectionLoader;
  'routes/movies/$movieId': typeof RoutesMovieLoader;
  'routes/movies/$movieId.watch': typeof RoutesMovieWatchLoader;
  'routes/discover/movies': typeof RoutesDiscoverMoviesLoader;
  'routes/movies/index': typeof RoutesMoviesIndexLoader;
  'routes/movies/popular': typeof RoutesPopularMoviesLoader;
  'routes/movies/top-rated': typeof RoutesTopRatedMoviesLoader;
  'routes/movies/upcoming': typeof RoutesUpcomingMoviesLoader;
  'routes/movies/$movieId/cast': typeof RoutesMovieCastsLoader;
  'routes/movies/$movieId/crew': typeof RoutesMovieCrewsLoader;
  'routes/movies/$movieId/recommendations': typeof RoutesMovieRecommendationsLoader;
  'routes/movies/$movieId/index': typeof RoutesMovieIndexLoader;
  'routes/movies/$movieId/photos': typeof RoutesMoviePhotosLoader;
  'routes/movies/$movieId/videos': typeof RoutesMovieVideosLoader;
  'routes/movies/$movieId/similar': typeof RoutesMovieSimilarLoader;
  'routes/people/$peopleId': typeof RoutesPersonLoader;
  'routes/people/index': typeof RoutesPeopleIndexLoader;
  'routes/people/$peopleId/credits': typeof RoutesPersonCreditsLoader;
  'routes/people/$peopleId/media': typeof RoutesPersonMediaLoader;
  'routes/search/anime/$animeKeyword': typeof RoutesSearchAnimeLoader;
  'routes/search/anime/index': typeof RoutesSearchAnimeIndexLoader;
  'routes/search/movie/$movieKeyword': typeof RoutesSearchMovieLoader;
  'routes/search/movie/index': typeof RoutesSearchMovieIndexLoader;
  'routes/search/people/$peopleKeyword': typeof RoutesSearchPeopleLoader;
  'routes/search/people/index': typeof RoutesSearchPeopleIndexLoader;
  'routes/search/tv/$tvKeyword': typeof RoutesSearchTvLoader;
  'routes/search/tv/index': typeof RoutesSearchTvIndexLoader;
  'routes/test/player': typeof RoutesTestPlayerLoader;
  'routes/tv-shows/$tvId.season.$seasonId.episode.$episodeId.watch': typeof RoutesTvSeasonEpisodeWatchLoader;
  'routes/tv-shows/$tvId.season.$seasonId': typeof RoutesTvSeasonLoader;
  'routes/tv-shows/$tvId': typeof RoutesTvLoader;
  'routes/discover/tv-shows': typeof RoutesDiscoverTvsLoader;
  'routes/tv-shows/index': typeof RoutesTvsIndexLoader;
  'routes/tv-shows/popular': typeof RoutesPopularTvsLoader;
  'routes/tv-shows/on-the-air': typeof RoutesOnTvLoader;
  'routes/tv-shows/top-rated': typeof RoutesTopRatedTvsLoader;
  'routes/tv-shows/$tvId/cast': typeof RoutesTvCastsLoader;
  'routes/tv-shows/$tvId/crew': typeof RoutesTvCrewsLoader;
  'routes/tv-shows/$tvId/recommendations': typeof RoutesTvRecommendationsLoader;
  'routes/tv-shows/$tvId/index': typeof RoutesTvIndexLoader;
  'routes/tv-shows/$tvId/photos': typeof RoutesTvPhotosLoader;
  'routes/tv-shows/$tvId/videos': typeof RoutesTvVideosLoader;
  'routes/tv-shows/$tvId/similar': typeof RoutesTvSimilarLoader;
  'routes/tv-shows/$tvId.season.$seasonId/cast': typeof RoutesTvSeasonCastsLoader;
  'routes/tv-shows/$tvId.season.$seasonId/crew': typeof RoutesTvSeasonCrewsLoader;
  'routes/tv-shows/$tvId.season.$seasonId/photos': typeof RoutesTvSeasonPhotosLoader;
  'routes/tv-shows/$tvId.season.$seasonId/videos': typeof RoutesTvSeasonVideosLoader;
};

function useTypedRouteLoaderData<T extends keyof Loaders>(route: T) {
  return useRouteLoaderData(route) as SerializeFrom<Loaders[T]>;
}

// eslint-disable-next-line import/prefer-default-export
export { useTypedRouteLoaderData };