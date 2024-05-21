import { LayoutProps } from "@/app/types/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    <main>{children}</main>
    )
};
export default Layout