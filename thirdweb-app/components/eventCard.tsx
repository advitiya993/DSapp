// Setting up hyperlinks
import Link from "next/link";
// Importing styles
import styles from "../app/styles/Home.module.css";
// Address truncation component
import { truncateAddress } from "../utils/truncateAddress";
// Handling timestamps
import { BigNumber } from "ethers";

//define a ts type alias EventCardProps
type EventCardProps = {
    // User's wallet address
    walletAddress: string;
    // User's status information
    newStatus: string;
    // Timestamp when the user posted the status
    timeStamp: BigNumber;
};

export default function EventCard(props: EventCardProps) {
    // Convert BigNumber timestamp to JavaScript Date object
    const date = new Date(props.timeStamp.toNumber() * 1000);

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventHeader}>
                {/* Set up a hyperlink for the wallet address */}
                <Link href={`account/${props.walletAddress}`} style={{ color: "white" }}>
                    {/* Truncate the address for better display */}
                    <p className={styles.connectedAddress}>{truncateAddress(props.walletAddress)}</p>
                </Link>
                {/* Format the date */}
                <p style={{ fontSize: "0.75rem" }}>{date.toLocaleString()}</p>
            </div>
            {/* Display the user's current status */}
            <p style={{ fontSize: "16px"}}>{props.newStatus}</p>
        </div>
    );
};