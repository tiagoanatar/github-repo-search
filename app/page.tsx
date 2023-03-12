"use client";

import { useState, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import { useThrottle } from "../hooks/useThrottle";
import { SearchInput } from "../components/SearchInput";
import { RepoCard } from "../components/RepoCard";
import { Pagination } from "../components/Pagination";
import { options, baseSearch } from "../constants/baseSearch";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [page, setPage] = useState(1);
  const [inputThrottle, setsThrottle] = useThrottle(baseSearch);

  const url = useMemo(() => {
    return `https://api.github.com/search/repositories?q=${inputThrottle}&page=${page}`;
  }, [page, inputThrottle]);

  const { loading, response } = useFetch(url, options);

  const handleSearch = (term: string) => {
    setPage(() => 1);
    if (term.length) {
      setsThrottle(term);
    } else {
      setsThrottle(baseSearch);
    }
  };

  const handlePagination = (page: number) => {
    setPage(() => page);
  };

  // Render different contents based in the api response success or failure
  const responseHeadSet = () => {
    if (response?.length) {
      return (
        <>
          <h2>
            <i className="fa fa-search"></i> Search results for: {inputThrottle}
          </h2>
          <Pagination page={page} handlePagination={handlePagination} />
        </>
      );
    }
  };

  const responseBodySet = () => {
    if (loading) {
      return <div className="loading"></div>;
    }
    if (!loading && response?.length) {
      return (
        <>
          <div className="repo-grid-main">
            {response?.map((item) => {
              return <RepoCard key={item.id} {...item} />;
            })}
          </div>
        </>
      );
    }
    if (!loading && response?.length === 0) {
      return (
        <h2>
          <i className="fa fa-search"></i> No search results found for:
          {inputThrottle}
        </h2>
      );
    }
    if (!loading && !response?.length) {
      return (
        <h2>
          <i className="fa fa-search"></i> Api search limit exceeded, please
          refresh application.
        </h2>
      );
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="/github.svg" alt="GitHub Logo" width={150} height={150} />
        <h1 className={styles.title}>GitHub Repo Search</h1>

        <SearchInput handleSearch={handleSearch} />

        {responseHeadSet()}
        {responseBodySet()}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
