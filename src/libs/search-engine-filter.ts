import { SearchInputType, SearchItemType } from "../intefaces/";

class SearchFilterBuilder {
  private static instance: SearchFilterBuilder | null = null;

  page: number;
  perPage: number;
  searchItems: SearchItemType[];
  searchTerm: string;
  sortBy: string;
  sortIn: string;

  private constructor() {
    this.page = 1;
    this.perPage = 10;
    this.searchItems = [];
    this.searchTerm = "";
    this.sortBy = "ID";
    this.sortIn = "ASC";
  }

  static getInstance(): SearchFilterBuilder {
    if (!SearchFilterBuilder.instance) {
      SearchFilterBuilder.instance = new SearchFilterBuilder();
    }
    return SearchFilterBuilder.instance;
  }

  setPage(entry: number) {
    this.page = entry;
    return this;
  }

  setPerPage(entry: number) {
    this.perPage = entry;
    return this;
  }

  setSearchItems(item: SearchItemType) {
    if (this.searchItems.includes(item)) {
      this.searchItems = [...this.searchItems].filter((f) => f !== item);
    } else this.searchItems = [...this.searchItems, item];
    return this;
  }

  addToSearchItems(item: SearchItemType) {
    if (this.searchItems.includes(item)) return this;
    this.searchItems = [...this.searchItems, item];
    return this;
  }

  removeFromSearchItems(item: SearchItemType) {
    if (this.searchItems.includes(item)) {
      this.searchItems = [...this.searchItems].filter((f) => f !== item);
    }
    return this;
  }

  setSearchTerm(term: string) {
    this.searchTerm = term;
    return this;
  }

  setSortBy(sort: string) {
    this.sortBy = sort;
    return this;
  }

  setSortIn(sort: string) {
    this.sortIn = sort;
    return this;
  }

  reset() {
    this.page = 1;
    this.perPage = 10;
    this.searchItems = [];
    this.searchTerm = "";
    this.sortBy = "ID";
    this.sortIn = "ASC";
    return this;
  }

  build(): SearchInputType {
    return {
      page: this.page,
      perPage: this.perPage,
      searchItems: this.searchItems,
      searchTerm: this.searchTerm,
      sortBy: this.sortBy,
      sortIn: this.sortIn,
    };
  }
}

export default SearchFilterBuilder;
