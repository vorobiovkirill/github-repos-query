import type { Language, RepositoryData } from '../types';

export enum Actions {
    SET_QUERY = 'SET_QUERY',
    ADD_REPOS = 'ADD_REPOS',
    ADD_FAVORITE_REPOS = 'ADD_FAVORITE_REPOS',
    ADD_LANGUAGES = 'ADD_LANGUAGES',
    SET_SELECTED_LANG = 'SET_SELECTED_LANG',
}

interface AppActions {
    type: Actions;
    payload: any;
}

export interface AppState {
    favoriteRepos: RepositoryData[];
    isLoading: boolean;
    languages: Language[];
    query: string;
    repos: RepositoryData[];
    selectedLang: string;
}

export const repoReducer = (state: AppState, action: AppActions): AppState  => {
    const { type, payload } = action;
    switch (type) {
        case Actions.SET_QUERY:
            return {
                ...state,
                query: payload,
            };
        case Actions.ADD_REPOS:
            return {
                ...state,
                repos: payload
            }
        case Actions.ADD_FAVORITE_REPOS:
            return {
                ...state,
                favoriteRepos: payload
            }
        case Actions.ADD_LANGUAGES:
            return {
                ...state,
                languages: payload
            }
        case Actions.SET_SELECTED_LANG:
            return {
                ...state,
                selectedLang: payload,
            }
        default:
            return state;
    }
};
