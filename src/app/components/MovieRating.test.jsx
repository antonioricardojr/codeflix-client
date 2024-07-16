import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieRating from './MovieRating';

describe('<MovieRating />', () => {
    it('renders the correct rating pg', () => {
        const rating = 'pg';
        render(<MovieRating rating={rating} />);
        const ratingElement = screen.getByText(`${rating}`);
        expect(ratingElement).toBeInTheDocument();
    });

    it('renders the correct rating pg-13', () => {
        const rating = 'pg-13';
        render(<MovieRating rating={rating} />);
        const ratingElement = screen.getByText(`${rating}`);
        expect(ratingElement).toBeInTheDocument();
    });

    it('renders the correct rating r', () => {
        const rating = 'r';
        render(<MovieRating rating={rating} />);
        const ratingElement = screen.getByText(`${rating}`);
        expect(ratingElement).toBeInTheDocument();
    });

    it('renders the correct rating nc-17', () => {
        const rating = 'r';
        render(<MovieRating rating={rating} />);
        const ratingElement = screen.getByText(`${rating}`);
        expect(ratingElement).toBeInTheDocument();
    });

    it('renders the correct rating other', () => {
        const rating = 'other';
        render(<MovieRating rating={rating} />);
        const ratingElement = screen.getByText(`${rating}`);
        expect(ratingElement).toBeInTheDocument();
    });

    it('renders the correct rating', () => {
        const rating = 'nc-17';
        render(<MovieRating rating={rating} />);
        expect(screen.getByText(rating)).toBeInTheDocument();
    });

    it('applies the correct class for the rating', () => {
        const rating = 'pg';
        render(<MovieRating rating={rating} />);
        
        const elementWithClass = screen.getByTestId('movie-rating-pg');

        expect(elementWithClass).toBeInTheDocument();
        expect(elementWithClass).toHaveClass('text-green-500');
    });
});