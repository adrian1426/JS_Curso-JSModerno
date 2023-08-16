import { loadUsersByPage } from "../use-cases/loadUsersByPage";

const state = {
  currentPage: 0,
  users: []
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);

  if (users.length > 0) {
    state.currentPage = state.currentPage + 1;
    state.users = users;
  }
};

const loadPreviousPage = async () => {
  const users = await loadUsersByPage(state.currentPage - 1);

  if (users.length > 0 && state.currentPage > 1) {
    state.currentPage = state.currentPage - 1;
    state.users = users;
  }
};

const onUserChanged = () => { };

const reloadPage = async () => { };

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage
};