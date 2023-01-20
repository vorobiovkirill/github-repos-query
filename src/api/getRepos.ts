import axios from 'axios';

import type { Language, RepositoryData } from '../types';
import { getUniqueListBy } from '../utils';

type GetRepos = {
    query: string;
    setIsLoading: (b: boolean) => void;
};

type GetReposResponse = {
    repositories: RepositoryData[];
    languages: Language[];
};

export const getRepos = async ({
    query,
    setIsLoading = () => {},
}: GetRepos): Promise<GetReposResponse> => {
    try {
        console.log('network call initiated');
        const repos = await axios(
            `https://api.github.com/search/repositories?q=${query}`
        );
        const repositories: RepositoryData[] = repos.data.items
            .map((repo: any) => {
                return {
                    id: repo.id,
                    name: repo.name,
                    url: repo.html_url,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    language: repo.language,
                    avatar: repo.owner.avatar_url,
                };
            })
            .sort((first: RepositoryData, second: RepositoryData) => second.stars - first.stars);

        const uniqueLanguages = getUniqueListBy(repositories, 'language').filter(item => item.language !== null);
        const languages = uniqueLanguages.map((lang) => ({
            id: lang.id,
            language: lang.language
        }));

        setIsLoading(false);
        return {
            repositories,
            languages,
        };
    } catch (error: any) {
        throw new Error(error);
    }
};
