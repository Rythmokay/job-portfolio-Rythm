"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-100 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all ${
        theme === "light"
          ? "bg-yellow-400 ring-4 ring-yellow-300"
          : "dark:bg-gray-950 ring-4 ring-blue-500"
      }`}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun />
      ) : (
        <BsMoon className="text-white drop-shadow-[0_0_8px_white]" />
      )}
    </button>
  );
}
