"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as jwt from 'jsonwebtoken'; // Correct import for jsonwebtoken
import { Button } from "@/components/ui/button";
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    // If there's no token, redirect to login
    if (!token) {
      router.push("/sign-in");
      return;
    }

    // Decode the token to get user information
    try {
      const decodedToken = jwt.decode(token); // Decode the JWT token

      console.log("Decoded Token:", decodedToken); // Log the decoded token to inspect its structure

      // Check if decodedToken is null or does not contain userId
      if (!decodedToken || !decodedToken.userId) {
        throw new Error("Invalid token structure");
      }

      const userId = decodedToken.userId;

      // Fetch user data from the backend using the decoded userId
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:4000/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          router.push("/sign-up"); // Redirect to sign-up if there's an issue
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    } catch (error) {
      console.error("Error decoding token:", error);
      router.push("/sign-in"); // Redirect if there's an issue with token decoding
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data. Please try again later.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {userData.name}!</h1>
      <p>Email: {userData.email}</p>
      <p>Joined: {new Date(userData.createdAt).toLocaleDateString()}</p>
      <div className="mt-4">
        <Button
          onClick={() => {
            localStorage.removeItem("jwtToken");
            router.push("/sign-in");
          }}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
