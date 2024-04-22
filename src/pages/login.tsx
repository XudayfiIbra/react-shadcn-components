
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();

  const NavigateHandle = () => {
    navigate('/otp');
  }
  return (
    <>
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Enter your email here to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 items-start space-y-2">
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="xudayfi@example.com"
                required
              />
            </div>
          </div>
          <div className="grid gap-2 items-start space-y-2 mt-4">
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="password" className="">
                Password
              </Label>
              <Input
                required
                id="password"
                type="password"
                placeholder="*********"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={NavigateHandle} type="submit" className="w-full">
            Create account
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default Login;
