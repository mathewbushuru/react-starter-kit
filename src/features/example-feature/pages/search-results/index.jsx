import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BiWorld as LinkIcon } from "react-icons/bi";

import { useSearch } from "features/example-feature/hooks";
import { SearchResultsLayout } from "features/example-feature/layouts";

import styles from "./SearchResultsPage.module.css";

const SEARCH_ON = true;

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q"));

  useEffect(() => {
    setSearchQuery(searchParams.get("q"));
  }, [searchParams]);

  const { searchResults, hitLimit } = useSearch(searchQuery);

  if (searchQuery.trim().length === 0) {
    return (
      <SearchResultsLayout>
        <div className={`code ${styles.emptyErrorMessageContainer}`}>
          <p>
            Sorry, could not complete your request because of an empty search
            string.
          </p>
        </div>
      </SearchResultsLayout>
    );
  }

  if (!searchResults) {
    return (
      <SearchResultsLayout>
        <div className={`code ${styles.emptyErrorMessageContainer}`}>
          Searching...
        </div>
      </SearchResultsLayout>
    );
  }

  return (
    <SearchResultsLayout>
      <div className={styles.searchResultsContainer}>
        <span className={`${styles.resultsNumber}`}>
          About {searchResults.searchInformation.formattedTotalResults} results
          ({searchResults.searchInformation.formattedSearchTime} seconds)
        </span>

        <div>
          {!SEARCH_ON && searchQuery.trim().toLowerCase() !== "ubc" && (
            <div
              className={`code ${styles.searchResult} ${styles.codeDisclaimer}`}
            >
              <p>
                [To prevent hitting the scraping rate limit, I have turned
                search off and I'm using a cached previous query('ubc'). If you
                are looking at the code, you can turn it back on at
                /src/config/index.js by changing SEARCH_ON from false to true,
                or try searching 'ubc']
              </p>
            </div>
          )}

          {hitLimit && searchQuery.trim().toLowerCase() !== "ubc" && (
            <div
              className={`code ${styles.searchResult} ${styles.codeDisclaimer}`}
            >
              <p>
                [Unfortunately, I have hit the scraping limit and will be unable
                to return real time google results for 24hrs. I'm using a cached
                previous query('ubc') for now.]
              </p>
            </div>
          )}

          {searchResults.items.map((result, index) => (
            <div key={index} className={styles.searchResult}>
              <div className={styles.searchResultLinks}>
                <LinkIcon className={styles.linkIcon} />
                <div>
                  <div className={styles.displayLink}>
                    <a href={result.link}>{result.displayLink}</a>
                  </div>
                  <div className={styles.link}>
                    <a href={result.link}>{result.link}</a>
                  </div>
                </div>
              </div>

              <div className={styles.searchResultDetails}>
                <h3>
                  <a href={result.link}>{result.title}</a>
                </h3>
                <p>{result.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SearchResultsLayout>
  );
};
