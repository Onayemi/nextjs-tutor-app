"use client";
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const SignInButton = () => {
  const { data: session } = useSession();
  
    return (
        <div className='flex gap-4 ml-auto'>
          {session?.user ? (
            <>
              <p className='p-2 ml-auto'>{session.user.firstName}</p>
              <button className='text-danger' onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => signIn()} className='p-2 ml-auto'>
              Sign In
            </button>
          )}
        </div>
    )
}

export default SignInButton