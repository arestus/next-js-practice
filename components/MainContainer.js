import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next js practice " + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Main" />
        <A href={"/users"} text="Users" />
        <style>
          {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                        display: flex;
                    }
              `}
        </style>
      </div>
      {children}
    </>
  );
};

export default MainContainer;
