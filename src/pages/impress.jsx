import React from "react";
import { Link } from "gatsby";
import useLegalNoticeData from "../hooks/useLegalNoticeData";
import Head from "../components/seo/Head";
import Pages from "../components/nav/Pages";

export default function Impress() {
  const { html } = useLegalNoticeData();

  return (
    <>
      <Head />
      <p
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Link to={Pages.HOME} title="Home">
        Home
      </Link>
    </>
  );
}
