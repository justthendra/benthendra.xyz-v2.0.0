import Card from '../pages/api/Card';
import Head from 'next/head';

export default function Projects() {
    return (
        <>
            <Head>
                 <title>Projects | Thendra</title>
            </Head>
            <div className="mx-auto max-w-7xl my-24">
                <h1 className="text-4xl text-white font-bold text-center">Projects</h1>
                <p className="font-medium text-lg text-white/50 text-center">You can explore all my projects here.</p>
            </div>
            <center>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-[300px]">
                <Card />
            </div></center>
        </>
    );
};