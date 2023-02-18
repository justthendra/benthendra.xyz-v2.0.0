import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import thendraConfig from "../../thendra.config";

export default function Footer() {
    const router = useRouter();

    let [heartColor, setHeartColor] = useState('#2a6900');

    function randomColor() {
        let color = '#';
        let letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return <>
        <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-lg text-zinc-400">© 2019 - {new Date().getFullYear()} {thendraConfig.name}. All rights reserved.</p>
                <div className="text-right">
                    <p className="text-lg text-zinc-400 select-none">Made with <i onClick={() => { setHeartColor(randomColor()) }} className="fas fa-heart" style={{ color: heartColor, cursor: 'pointer' }} /> by <a href="https://github.com/thendra-s" className="text-zinc-400 hover:text-primary hover:dark:text-white">Thendra</a></p>
                    <p className="text-sm text-zinc-400 select-none">Powered by <a href="https://replit.com/" className="text-zinc-400 hover:text-primary hover:dark:text-white">Replit</a></p>
                </div>
            </div>
        </div>
    </>
}