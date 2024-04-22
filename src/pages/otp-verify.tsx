import { InputOTPDemo } from "@/components/otp-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useNavigate } from "react-router";
function OtpVerify() {
  const navigate = useNavigate();

  const GreetingNavigate = () => {
    navigate("/greeting");
  };
  return (
    <>
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>OTP verification</CardTitle>
          <CardDescription>
            Enter the OTP we send your phone number *******67
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 items-start space-y-2 ml-9">
            <div className="flex flex-col items-start space-y-2">
              <InputOTPDemo />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={GreetingNavigate} type="submit" className="w-full">
            Verify
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default OtpVerify;
