import Head from "next/head";
import DashboardContent from "../../src/views/dashboard/Dashboard";

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="" />
                <link rel="icon" href="assets/images/favicon.png" />
            </Head>
            <main>
                <DashboardContent />
            </main>
        </div>
    )
}

export default Dashboard