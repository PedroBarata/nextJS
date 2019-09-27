import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
    static getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'});
            }, 1000);
        })
        return promise;
    }
    render() {
        return (
        <div>
            <h1>The main page of {this.props.appName}!</h1>
            <p>
            Go to{" "}
            <Link href="/auth">
                <a>Auth</a>
            </Link>
            </p>
            <button onClick={() => Router.push("/auth")}>Go to auth</button>
            <Link href="/auth">
            <a>GO TO AUTH</a>
            </Link>

            <style jsx>
            {`
                div {
                border: 1px solid #eee;
                box-shadow: 1px solid #ccc;
                padding: 20px;
                text-align: center;
                }
            `}
            </style>
        </div>
        );
    }
}
export default IndexPage;
