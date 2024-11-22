//
"use client"; 
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "./styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import UserStatus from "../components/user-status";
import StatusEvents from "../components/statusEvents";
import AccountFeed from "./account/[walletAddress]/page";
import { client } from "./client";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className="{styles.statusContainer}">
          <UserStatus/>
        </div>
        <h3>Status Feed:</h3>
        <StatusEvents/>
        {/* <h3>Account Feed:</h3> */}
        {/* <AccountFeed/> */}
      </div>
    </main>
  );
};

export default Home;