import React from "react";
import { Link } from "gatsby";
import useAboutMeData from "../hooks/useAboutMeData";
import Head from "../components/seo/Head";
import Pages from "../components/nav/Pages";
// TODO
//   this should include an in-depth explanation of what I do - maybe such a section would be helpful on the
//   landing-page as well?
export default function About() {
  const { html } = useAboutMeData();

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
