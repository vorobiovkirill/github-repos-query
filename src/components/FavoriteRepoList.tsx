import type { RepositoryData } from '../types';
import { FavoriteRepo } from './FavoriteRepo';

interface IFavoriteRepoList {
    repos: RepositoryData[];
    isLoading: boolean;
}

export const FavoriteRepoList: React.FC<IFavoriteRepoList> = ({ repos, isLoading }) => {
    if (!repos) return null;

    if (!repos.length && !isLoading) return <p>Favorite repositories is empty</p>

    return (
        <div>
            <h3 className="text-3xl font-bold dark:text-white">Favorite Repositories</h3>
            <ul className="mt-10">
                {repos.map(repo => <FavoriteRepo repo={repo} />)}
            </ul>
        </div>
    )
}
