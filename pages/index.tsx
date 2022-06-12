import Head from "next/head";
import { Button, Space, DatePicker, Card } from "antd";
import UtilsTable from "../components/UtilsTable";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wonderl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="utils-table">
        <UtilsTable />
      </div>
      <style jsx>{`
        .container {
          text-align: center;
        }

        .utils-table {
          width: 1200px;
          margin: 0 auto;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
