import React from 'react'
import type { AppState } from '../reducer/repoReducer'
import { Language } from '../types';

interface IForm {
    languages: AppState['languages'];
    query: AppState['query'];
    selectedLang: AppState['selectedLang'];
    handleQueryChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleLanguageSelect(e: React.ChangeEvent<HTMLSelectElement>): void
}

export const Form: React.FC<IForm> = ({ languages, query, selectedLang, handleQueryChange, handleLanguageSelect }) => {
    return (
        <form>
            <fieldset className="mb-6">
                <label htmlFor="repos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search repos</label>
                <input id="repos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter repo name" onChange={handleQueryChange} value={query} />
            </fieldset>
            <fieldset className="mb-6">
                <label htmlFor="languages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select defaultValue="default" id="languages" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleLanguageSelect} value={selectedLang}>
                    <option value="default" disabled>
                        Choose language
                    </option>
                    {languages?.map((item: Language) => <option key={item.id} value={item.language}>{item.language}</option>)}
                </select>
            </fieldset>
        </form>
    )
}
