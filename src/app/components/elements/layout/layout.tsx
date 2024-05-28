import { LayoutProps } from "@/app/interfaces/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    <main>{children}</main>
    )
};
export default Layout