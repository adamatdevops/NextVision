/* eslint-disable max-len */
// import { Rotes, Router, Link } from "react-router-dom";
import * as React from "react";
import { Routes, Router, Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/">Go back to the homepage</a>
        </div>
    );
};

export default Error404;

/*
export default function PageNotFound() {
  return ServerCodePage({
    serverCode: 404,
    codeDescription: "Couldn’t find what you’re looking for.",
  });
}
*/