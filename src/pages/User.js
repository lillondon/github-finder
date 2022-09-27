import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="Github Profile" />
              </figure>
              <div className="card-body justify-end gap-0">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0 mt-0">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-outline badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge badge-outline badge-info">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline text-white"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats stats-vertical sm:stats-horizontal overflow-hidden">
              {location && (
                <div className="stat shrink ">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value text-white">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value text-white">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value text-white">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats stats-vertical md:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-accent">
              <FaUsers className="text-3xl md:text-4xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-accent">
              <FaUserFriends className="text-3xl md:text-4xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-accent">
              <FaCodepen className="text-3xl md:text-4xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-accent">
              <FaStore className="text-3xl md:text-4xl" />
            </div>
            <div className="stat-title pr-5">Public Gist</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
