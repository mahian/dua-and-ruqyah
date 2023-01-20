import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Menu from "@/components/home/Menu";
import Meta from "@/components/Meta";

export default function Home() {
  return (
    <>
      <Meta />
      <main>
        <Banner />
        <Menu />
        <Categories />
      </main>
    </>
  )
}
