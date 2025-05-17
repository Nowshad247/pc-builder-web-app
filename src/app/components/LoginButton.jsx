"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
      <Button onClick={() => signIn()}>Sign In</Button>
    </div>
  );
}
