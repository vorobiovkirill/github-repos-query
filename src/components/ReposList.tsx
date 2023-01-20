import type { RepositoryData } from '../types';
import { Repo } from './Repo';

interface IReposList {
    repos: RepositoryData[];
    isLoading: boolean;
    selectedLang: string;
    addToFavoriteRepos(repo: RepositoryData): void;
}

export const ReposList: React.FC<IReposList> = ({ repos, isLoading, addToFavoriteRepos, selectedLang }) => {
    if (!repos) return null;

    if (!repos.length && !isLoading) return <p>Sorry, no repositories found</p>

    const data = selectedLang === 'default' ? repos : repos.filter((repos) => repos.language === selectedLang);

    return (
        <div>
            <h3 className="text-3xl font-bold dark:text-white">Founded Repositories:</h3>
            <ul className="mt-10">
                {data.map(repo => <Repo repo={repo} addToFavoriteRepos={addToFavoriteRepos} />)}
            </ul>
        </div>
    )
}
