"use client";
import { Settings, LogOut, User,Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlertDialog,AlertDialogTrigger,AlertDialogContent } from "@/components/ui/alert-dialog";
import AddFriend from "../../add-friend";
import Image from "next/image";
const SideBar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-[300px] h-screen bg-white border-r border-gray-300 flex flex-col">
      {/* User Info & Settings */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img src={user?.avatar || "/default-avatar.png"} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-gray-900 font-semibold">{user?.name || "John Doe"}</p>
            <p className="text-gray-500 text-sm">Active now</p>
          </div>
        </div>
        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Settings size={24} className="cursor-pointer text-gray-700 hover:text-black" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem className="flex items-center space-x-2">
              <User size={18} />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2 text-red-600">
              <LogOut size={18} />
              <span>Logout</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2 text-red-600">
              <LogOut size={18} />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2 text-red-600">
              <LogOut size={18} />
              <span>Friends</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Friends List */}
      <div className="flex-1 overflow-y-auto p-4">
        <p className="text-gray-500 text-sm font-semibold mb-2">Friends</p>
        <AlertDialog>
          <AlertDialogTrigger>
          <Button className={'cursor-pointer'} variant={'ghost'}>
          Add Friend <Plus />
        </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AddFriend />
          </AlertDialogContent>
        </AlertDialog>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : friends.length > 0 ? (
          friends.map((friend) => <UserItem key={friend.id} user={friend} />)
        ) : (
          <p className="text-gray-400 text-sm">No friends yet</p>
        )}

        <hr className="my-4" />

        {/* All Users List */}
        <p className="text-gray-500 text-sm font-semibold mb-2">All Users</p>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : (
          allUsers.map((user) => <UserItem key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

const UserItem = ({ user }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-gray-100 transition">
      <img src={user.avatar || "/default-avatar.png"} alt={user.name} className="w-8 h-8 rounded-full" />
      <span className="text-gray-900 font-medium">{user.name}</span>
    </div>
  );
};

export default SideBar;