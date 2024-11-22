"use client";
// Importing components provided by Thirdweb for interacting with contracts
import { useContract, useContractEvents } from '@thirdweb-dev/react';
// Importing styles
import styles from '../../styles/Home.module.css';
// Importing router to access router parameters
import { useParams } from 'next/navigation';
// Importing contract address
import { STATUS_CONTRACT_ADDRESS } from '../../../constants/addresses';
// Importing the EventCard component
import EventCard from '../../../components/eventCard';


//Define Specified User Status Feed Component
export default function AcountFeed() {
    // Get the page router
    const params = useParams();
    // Get the walletAddress parameter from the page router
    const walletAddress = params.walletAddress as string;

    const {
        contract
    } = useContract(STATUS_CONTRACT_ADDRESS);

    const {
        data: userEvents,
        isLoading: isUserEventsLoading,
    } = useContractEvents(
        contract,
        "StatusUpdated",
        {
            subscribe: true,
            // Filter to keep only events for the current account
            queryFilter: {
                filters: {
                    user: walletAddress,
                }
            }
        }
    );
    //Render Data
    return (
        <div className={styles.container} style={{ maxWidth: "500px" }}>
            <button
                onClick={() => window.location.href='/'}//navigation in app router
                className={styles.updateButton}
            >Back</button>
            <h1>Account Feed</h1>
            <p style={{ fontSize: "0.75rem" }}>{walletAddress}</p>
            <h3>Latest Updates:</h3>
            {!isUserEventsLoading && userEvents && (
                userEvents.slice(0, 20).map((event, index) => (
                    <EventCard
                        key={index}
                        walletAddress={event.data.user}
                        newStatus={event.data.newStatus}
                        timeStamp={event.data.timestamp}
                    />
                ))
            )}
        </div>
    )
};