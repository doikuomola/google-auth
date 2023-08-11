'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

import React from 'react';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border w-1/2 lg:w-1/4 p-8 shadow-xl border-l-4 rounded border-l-yellow-600">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="relative h-20 w-20 ">
                <Image
                  fill
                  alt="user image"
                  src={session?.user?.image}
                  className="rounded-full object-contain"
                />
              </div>
              <div className="">
                <h2>Hello</h2>
                <span className="text-xl font-semibold">
                  {session?.user.name}
                </span>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-zinc-200 hover:bg-red-300 transition duration-200 ease-in-out py-2 uppercase px-6 rounded-lg w-max"
            >
              log out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <button
        className="bg-zinc-200 hover:bg-zinc-300 transition duration-200 ease-in-out py-2 uppercase px-6 rounded-lg"
        onClick={() => signIn()}
      >
        Login with Google
      </button>
    </div>
  );
}
