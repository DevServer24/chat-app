'use client'
import { useState } from "react";
import axios from "axios";
import { useLoadFetcher } from "@/lib/fetcher";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const AddFriend = () => {
  const addfriendUrl = process.env.NEXT_PUBLIC_ADD_FRIEND;
  const { data: friends, loading, error } = useLoadFetcher(addfriendUrl);
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!formData.email) return;

    try {
      const response = await axios.post(addfriendUrl, { email: formData.email });
      console.log("Friend request sent:", response.data);
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-bold">Add a Friend</h2>

      <form onSubmit={handleAddFriend} className="mt-2 flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
        <Button type="submit" variant={'ghost'}>
          Add Friend <Plus />
        </Button>
      </form>
    </div>
  );
};

export default AddFriend;
