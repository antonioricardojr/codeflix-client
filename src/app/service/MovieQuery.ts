import { gql } from '@apollo/client';
import { apolloClient } from '../../../lib/apolloClient';

export const GET_MOVIES_QUERY = gql`
    query GetMovies {
        movies {
            id
            link
            title
            rating
            genres
            description
            yearLaunched
            thumbFileURL
            videoFileURL
            bannerFileURL
        }
    }
`;

export const GET_MOVIES_BY_ID = gql`
    query GetMoviesById($id: ID!) {
        movie(id: $id) {
            id
            link
            title
            rating
            genres
            description
            yearLaunched
            thumbFileURL
            videoFileURL
            bannerFileURL
        }
    }
`

export const GET_MOVIES_BY_GENRE = gql`
    query getMoviesByGenre($genre: String!, $limit: Int!) {
        moviesByGenre(genre: $genre, limit: $limit) {
            id
            title
            description
            yearLaunched
            link
            genres
            rating
            thumbFileURL
            bannerFileURL
            videoFileURL
        }
    }
`

export const getMoviesByGenre = async (
    genre: string,
    options: { _limit?: number } = { }
    ) => {
        const limit = options?._limit || 8;
        const { data } = await apolloClient.query({
            query: GET_MOVIES_BY_GENRE,
            variables: { genre: genre, limit: limit },
        });
    return data.moviesByGenre;
}

export const getFeaturedMovie = async (id: string) => {
    const { data } = await apolloClient.query({
        query: GET_MOVIES_BY_ID,
        variables: { id },
    });

    return data.movie;
}