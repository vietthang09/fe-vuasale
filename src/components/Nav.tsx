"use client";

import { baseURL } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav({ containerStyles, linkStyles }: any) {
  const router = useRouter();
  const [user, setUser] = useState<any>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [info, setInfo] = useState({
    expireAt: "",
    total: 0,
    limit: 0,
  });
  const [license, setLicense] = useState(false);
  function logout() {
    localStorage.clear();
    router.push("/");
    setInterval(() => {
      window.location.reload();
    }, 2000);
  }

  async function checkRole(id: string) {
    const response = await fetch(`${baseURL}/users/is-admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const body = await response.json();
    if (response.ok) {
      if (body.isAdmin) {
        setIsAdmin(true);
      }
    }
  }

  async function getInfo(id: string) {
    const response = await fetch(`${baseURL}/users/info?id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const body = await response.json();
    if (body.error) {
      console.log(body.error);
    } else {
      setInfo({
        expireAt: body.expireAt,
        total: body.total,
        limit: body.limit,
      });
    }
  }

  async function checkLicense(id: string) {
    const response = await fetch(`${baseURL}/users/check?id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const body = await response.json();
    if (response.ok) {
      setLicense(body.status);
    }
  }

  async function updateKey(id: string) {
    if (id) {
      const response = await fetch(`${baseURL}/users/key`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const body = await response.json();
      if (body.error) {
        alert(body.error);
      } else {
        const localUser = localStorage.getItem("user");
        if (localUser) {
          var oldUser = JSON.parse(localUser);
          localStorage.setItem(
            "user",
            JSON.stringify({
              access_token: oldUser.access_token,
              email: oldUser.email,
              id: oldUser.id,
              key: body.key,
            })
          );
          window.location.reload();
        }
      }
    }
  }

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      setUser(parsedUser);
      checkRole(parsedUser.id);
      getInfo(parsedUser.id);
      checkLicense(parsedUser.id);
    }
  }, []);

  return (
    <nav className={`${containerStyles}`}>
      <Link href={"/"}>
        <div className="text-white font-semibold text-xl font-mono">
          Vua Sale
        </div>
      </Link>
    </nav>
  );
}
