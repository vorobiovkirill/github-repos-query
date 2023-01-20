import type { RepositoryData } from '../types';

interface IFavoriteRepo {
    repo: RepositoryData;
}

export const FavoriteRepo: React.FC<IFavoriteRepo> = ({ repo }) => {
    return (
        <li key={repo.id} className="mb-10">
            <div className="flex gap-4 justify-between">
                <div>
                    <img src={repo.avatar} alt={repo.name} width="200" height="200" />
                </div>
                <div className="flex-auto">
                    <h4 className="text-2xl font-bold dark:text-white">{repo.name}</h4>
                    <span>(⭐: {repo.stars})</span>
                    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">{repo.description}</p>
                    <p>Language: {repo.language}</p>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={repo.url}>link to repo</a>
                </div>
            </div>
        </li>
    )
}
