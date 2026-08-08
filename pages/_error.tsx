import { NextPageContext } from "next";

function ErrorPage({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</h1>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
