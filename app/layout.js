import "./globals.css";
import ThemeProvider from "@/Providers/ThemeProvider";
import { Toaster } from "sonner";
import { dbConnect } from "@/lib/mongo";

export const metadata = {
  manifest: "/manifest.json",
  title: "Wifi - Shakib Electronics",
  description: "Explore || Service || Build || Share || Wifi",
  generator: "Next.js",
  applicationName: "Wifi - Shakib Electronics",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Wifi - Shakib Electronics",
    "Wifi Hotspot",
    "Hotspot",
    "Shakib Electronics",
    "Wifi",
    "Mikrotik",
  ],
  authors: [{ name: "Pro Minhaj", url: process.env.BASE_URL }],
  creator: "Pro Minhaj",
  openGraph: {
    title: "Wifi - Shakib Electronics",
    description: "Explore || Service || Build || Share || Wifi",
    url: process.env.BASE_URL,
    type: "website",
    images: [
      {
        url: `${process.env.BASE_URL}/open-grash-image.png`,
        width: 600,
        height: 400,
        alt: "Wifi - Shakib Electronics Image",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({ children }) {
  // Connect to MongoDB database
  await dbConnect();

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className="relative w-full overflow-hidden bg-transparent overflow-x-clip">
            {/* Background effects */}
            <div className="fixed top-0 right-[28%] hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
            <div className="fixed bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
            <div className="fixed left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
            <div className="fixed h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="fixed h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
            <div className="fixed hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="fixed hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

            {/* Main background pattern */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {children}
          </main>
        </ThemeProvider>
        <Toaster richColors position="top-center" duration={3000} />
      </body>
    </html>
  );
}
