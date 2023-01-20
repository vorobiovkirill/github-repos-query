import './App.css';
import { useEffect, useReducer } from 'react';
import { ReposList } from './components/ReposList';

import { getRepos } from './api/getRepos'
import type { RepositoryData } from './types';
import { FavoriteRepoList } from './components/FavoriteRepoList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { repoReducer, Actions, AppState } from './reducer/repoReducer';
import { Form } from './components/Form';

const initialState: AppState = {
  favoriteRepos: [],
  isLoading: true,
  languages: [],
  query: 'react',
  repos: [],
  selectedLang: 'default',
}

function App() {
  const [localStorageValue, setToLocalStorage] = useLocalStorage("favoriteRepos", "");
  const [state, dispatch] = useReducer(repoReducer, initialState);

  const setIsLoading = (loading: boolean) => dispatch({ type: Actions.ADD_LANGUAGES, payload: loading })

  useEffect(() => {
    dispatch({ type: Actions.ADD_FAVORITE_REPOS, payload: localStorageValue })
    getRepos({ query: state.query, setIsLoading }).then(data => {
      dispatch({ type: Actions.ADD_REPOS, payload: data.repositories })
      dispatch({ type: Actions.ADD_LANGUAGES, payload: data.languages })
    });
  }, [state.query])

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    dispatch({ type: Actions.SET_QUERY, payload: value })
  }

  const handleLanguageSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: Actions.SET_SELECTED_LANG, payload: e.target.value })
  }

  const addToFavoriteRepos = (data: RepositoryData): void => {
    const item = state.repos.find((repo: RepositoryData) => repo.id === data.id)

    if (item) {
      const result = [...new Set(state.favoriteRepos.concat(item))]
      dispatch({ type: Actions.ADD_FAVORITE_REPOS, payload: result })
      setToLocalStorage(result);
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline mb-4">Repos by query: {state.query}</h1>
      <Form languages={state.languages} query={state.query} selectedLang={state.selectedLang} handleQueryChange={handleQueryChange} handleLanguageSelect={handleLanguageSelect} />
      <FavoriteRepoList repos={state.favoriteRepos} isLoading={state.isLoading} />
      <ReposList repos={state.repos} selectedLang={state.selectedLang} isLoading={state.isLoading} addToFavoriteRepos={addToFavoriteRepos} />
    </div>
  );
}

export default App;
