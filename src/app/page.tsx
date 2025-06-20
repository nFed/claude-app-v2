"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [supabaseStatus, setSupabaseStatus] = useState<string>("Checking...");

  useEffect(() => {
    const checkSupabase = async () => {
      try {
        const { error } = await supabase.from("_health").select("*").limit(1);
        if (error) {
          setSupabaseStatus("Not connected (requires setup)");
        } else {
          setSupabaseStatus("Connected");
        }
      } catch {
        setSupabaseStatus("Not connected (requires setup)");
      }
    };

    checkSupabase();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Next.js + TypeScript + Tailwind CSS + Supabase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Next.js
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              React framework with server-side rendering
            </p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                ✓ Active
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Tailwind CSS
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Utility-first CSS framework
            </p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                ✓ Active
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">📘</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              TypeScript
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Type-safe JavaScript
            </p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                ✓ Active
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🗄️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Supabase
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Backend-as-a-Service platform
            </p>
            <div className="mt-4">
              <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                supabaseStatus === "Connected" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {supabaseStatus === "Connected" ? "✓" : "⚠"} {supabaseStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Setup Instructions
            </h2>
            <div className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold">1.</span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Copy <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">.env.local.example</code> to <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">.env.local</code>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold">2.</span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Add your Supabase project URL and anon key to <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">.env.local</code>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold">3.</span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Run <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">npm run dev</code> to start the development server
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
