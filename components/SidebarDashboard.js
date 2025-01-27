import React from "react";
import Link from "next/link";

export default function SidebarDashboard() {
  return (
    <div className="min-h-screen">
      {/* Profile Picture */}
      <div className="flex flex-col  items-center gap-4">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/images/profile.jpg" />
          </div>
        </div>
        <span className="font-semibold text-lg">Cavite State University</span>

        {/* Profile Picture */}

        {/* Content */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <button className="btn btn-success btn-wide btn-sm text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </button>
          </div>
          <div>
            <Link href="/pages/import-record">
              <button className="btn btn-success btn-wide btn-sm text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                Import
              </button>
            </Link>
          </div>
          <div>
            <button className="btn btn-success btn-wide btn-sm text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              Export
            </button>
          </div>
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-success btn-wide btn-sm text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Actions
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link href="/pages/create-record">
                      <div className="text-success">Create Record</div>
                    </Link>
                  </li>
                  <li>
                    <a className="text-success">Edit Record</a>
                  </li>
                  <li>
                    <a className="text-error">Delete Record</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <button className="btn btn-neutral text-white btn-sm">
                Settings
              </button>
            </div>
            <div>
              <button className="btn btn-error text-white btn-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
        {/* Content */}
      </div>
    </div>
  );
}
