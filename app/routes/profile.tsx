import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Profile - Budget" }];
};

export default function Profile() {
    return (
        <div id="profile">
        </div>
    );
}