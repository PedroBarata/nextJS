import React from "react";

const indexAuthPage = (props) => {
  return (
    <div>
      <h1>The auth Page - {props.appName}</h1>
    </div>
  );
};

indexAuthPage.getInitialProps = context => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default indexAuthPage;
