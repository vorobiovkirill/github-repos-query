import type { RepositoryData } from '../types';

interface IRepo {
    repo: RepositoryData;
    addToFavoriteRepos(repo: RepositoryData): void;
}

export const Repo: React.FC<IRepo> = ({ repo, addToFavoriteRepos }) => {
    return (
        <li key={repo.id} className="mb-10">
            <div className="flex gap-4 justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
                <div>
                    <button onClick={() => addToFavoriteRepos(repo)} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to favorite</button>
                </div>
            </div>
        </li>
    )
}
