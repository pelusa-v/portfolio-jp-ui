export type SidebarItem = {
    data: SidebarItemData
    subItems: SidebarItemData[]
}

export type SidebarItemData = {
     key: string;
     path?: string;
     help: string;
}

let sideBarData: SidebarItem[] = [];
sideBarData.push({
	data: {
		key: "About me",
		help: "Information about current user",
	},
	subItems: [
		{
			key: "Profile",
			path: "/profile",
			help: "Profile of current user"
		},
		{
			key: "Projects",
			path: "/projects",
			help: "Projects of current user"
		},
		{
			key: "Contact",
			path: "/contact",
			help: "Contact of current user"
		}
	],
});
sideBarData.push({
	data: {
		key: "Blog",
		help: "Blog about current user",
	},
	subItems: [
		{
			key: "Posts",
			path: "/posts",
			help: "Some recent posts"
		},
		{
			key: "Tutorials",
			path: "/tutorials",
			help: "Some tutorials"
		},
		{
			key: "Books",
			path: "/books",
			help: "Great books"
		}
	],
});

export default sideBarData;