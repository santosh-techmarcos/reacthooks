
// import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Useeffect = () => {

  async function githubusersData() {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    console.log(data)
  }
  githubusersData();

  return (
    <div className="w-full h-screen space-y-4 p-10">
      <h1 className="text-2xl font-bold">
        useEffect Example: Github Profile Gallery
      </h1>
      {/* <Input placeholder="how many profile you want to show" /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-lg font-semibold">shadcn</CardTitle>
            <CardDescription>UI Component Library</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Useeffect;
