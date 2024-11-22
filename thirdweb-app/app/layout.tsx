// app/layout.tsx
// import './globals.css';
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { lineaSepolia } from '../../lib/linea-sepolia-chain'; // Adjust the path to your custom chain file

// export const metadata = {
//   title: 'My Thirdweb App',
//   description: 'A Web3 app with Thirdweb and Next.js 13',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThirdwebProvider
//           clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
//           activeChain={lineaSepolia} // Use your custom chain here
//         >
//           {children}
//         </ThirdwebProvider>
//       </body>
//     </html>
//   );
// }
"use client";
// import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, rainbowWallet, smartWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import "../app/globals.css";
import { lineaSepolia } from "../lib/linea-sepolia-chain"

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThirdwebProvider
//       clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
//       activeChain={lineaSepolia}
//       //  引入钱包组件
//       supportedWallets={[
//         metamaskWallet(),
//         coinbaseWallet(),
//         walletConnect(),
//         rainbowWallet(),
//         trustWallet(),
//       ]}
//     >
//       <Component {...pageProps} />
//     </ThirdwebProvider>
//   );
// }

// export default MyApp;

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <ThirdwebProvider
//       clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
//       activeChain={lineaSepolia}
//       supportedWallets={[
//         metamaskWallet(),
//         coinbaseWallet(),
//         walletConnect(),
//         rainbowWallet(),
//         trustWallet(),
//       ]}
//     >
//       {children}
//     </ThirdwebProvider>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
          activeChain={lineaSepolia}
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            rainbowWallet(),
            trustWallet(),
          ]}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}