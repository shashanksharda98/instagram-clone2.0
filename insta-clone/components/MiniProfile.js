import React from 'react';
import {signOut, useSession} from "next-auth/react"

function MiniProfile() {
    const {data:session} = useSession();

    return (
        <div className="flex items-center justify-between mt-1 ml-10">
            <img className="w-12 h-12 rounded-full border p-[1px]" 
            src={session?.user?.image} alt="" />

            <div className="flex-1 mx-4">
                <h3 className="font-bold text-sm">{session?.user.username}</h3>
                <h4 className="text-xs text-gray-400">Welcome to instagram</h4>
            </div>

            <button onClick={signOut} className="text-blue-400 text-sm font-semibold h-6">Sign Out</button>
        </div>
        
    )
}

export default MiniProfile
