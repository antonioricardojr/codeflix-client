import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";


export default function SearchForm({ searchTerm, onSearchTermEventChange, onSearch} : 
    { 
        searchTerm: string, 
        onSearchTermEventChange: (event: React.ChangeEvent<HTMLInputElement>) => void, 
        onSearch: (event: React.FormEvent<HTMLFormElement>) => void
    }) {

    return (
        <form
            onSubmit={onSearch}
            className="flex items-center space-x-2">
            <button type="submit">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"></MagnifyingGlassIcon>
            </button>
            <input
                type="search"
                id="search"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={onSearchTermEventChange}
                className="bg-transparent text-white placeholder-white outline-none" />
        </form>
    );
}