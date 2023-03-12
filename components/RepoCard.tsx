'use client'
import { Repo } from '../types/api'
import Link from 'next/link'

export const RepoCard = (item:Repo) => {

  return (
    <>
      <div>
        <h2><i className="fa fa-link"></i> <Link href={item.html_url}>{item.name}</Link></h2>
        {item.description ? (<p>{item.description}</p>) : null}
        By: <i className="fa fa-user"></i> {item.owner.login}
      </div>
    </>
  );
};

interface Search {
  items: []
}