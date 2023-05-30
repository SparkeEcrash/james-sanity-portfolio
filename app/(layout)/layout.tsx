import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getPageData } from "../../utils/fetchData";
import { IHomePageData } from "../../typings";

// export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: IHomePageData = await getPageData("/api/getHome");
  const socials = data.socials;
  return (
    <>
      <Navigation />
      {children}
      <Footer socials={socials} />
    </>
  );
}
